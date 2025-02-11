import { Task, Permission } from "../models/index.mjs";
import { Sequelize } from "sequelize";

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll({
      where: { projectId: req.params.projectId },
      include: [
        {
          model: Permission,
          as: "permission",
          required: false,
        },
      ],
    });

    const taskMap = tasks.reduce((acc, task) => {
      if (!acc[task.id]) {
        acc[task.id] = {
          ...task.get({ plain: true }),
          permissions: [],
        };
      }
      if (task.permission) {
        acc[task.id].permissions.push(task.permission);
      }
      return acc;
    }, {});

    const uniqueTasks = Object.values(taskMap);

    res.json({ data: uniqueTasks, count: uniqueTasks.length });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
