import { Task, Permission } from "../models/index.mjs";

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
      group: ["Task.id"],
    });

    res.json({ data: tasks, count: tasks.length });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
