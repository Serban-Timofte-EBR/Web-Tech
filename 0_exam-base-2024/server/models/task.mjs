/**
 * Defines the 'task' entity in the database.
 *
 * @param {object} sequelize - The Sequelize instance used to define the model.
 * @param {object} DataTypes - A collection of data types supported by Sequelize.
 * @returns {object} A Sequelize model representing the 'task' entity.
 *
 * @property {string} title - The title of the task. This field is required.
 * @property {string} [description] - A detailed description of the task. This field is optional.
 * @property {string} status - The current status of the task. Defaults to 'open'.
 */
export default (sequelize, DataTypes) => {
  const Task = sequelize.define("task", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "open",
    },
    projectId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    assignedToId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });

  Task.associate = (models) => {
    Task.hasMany(models.Permission, {
      foreignKey: "forResource",
      as: "permission",
    });
  };

  return Task;
};
