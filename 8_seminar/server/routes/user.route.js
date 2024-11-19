const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../database/models/User.js');
const { where } = require('sequelize');
const router = express.Router();

const BCRYPT_SALT = process.env.BCRYPT_SALT;

router.get('/', async (req, res) => {
    try {
        const users = await User.findAll();

        res.status(200).json(users);
    } catch (error) {
        console.error(error);
    }
});

router.post('/', async (req, res) => {
    try {
        const {username, role, email, password} = req.body;

        const salt = bcrypt.genSaltSync(BCRYPT_SALT);
        const hashedPassword = bcrypt.hashSync(password, salt);

        const user = await User.create({
            username,
            role,
            email,
            password: hashedPassword
        });

        delete user.dataValues.password;

        res.status(201).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: error.message});
    }
});

router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;

        const user = await User.findByPk(id, {
            attributes: {
                exclude: ['password']
            }
        });

        if (!user) {
            res.status(404).json({error: 'User not found'});
        }

        res.status(200).json(user);
    } catch (error) {
        console.error(error);
    }
})

router.put("/:id", async (req, res) => {
    try {
        const id = req.params.id;

        const user = await User.findByPk(id);

        if (!user) {
            res.status(404).json({error: 'User not found'});
        }

        const updatedUser = await user.update(req.body, {
            returning: true,
            attributes: {
                exclude: ['password']
            }
        });

        delete updatedUser.dataValues.password;

        res.status(200).json(updatedUser);
    } catch (error) {
        console.error(error);
        req.status(500).json({error: error.message});
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;

        const user = await User.findByPk(id);

        if (!user) {
            res.status(404).json({error: 'User not found'});
        }

        await user.destroy();

        res.status(200).json({message: 'User deleted'});
    } catch (error) {
        console.error(error);
        res.status(500).json({error: error.message});
    }
});

module.exports = router;