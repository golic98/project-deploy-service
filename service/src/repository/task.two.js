import Task2 from "../model/task.two.js";

export const insertTask2 = async (taskData) => {
    const newTask = new Task2(taskData);
    return await newTask.save();
};

export const selectTask2 = async (userId) => {
    return await Task2.findById({ user: userId }).populate();
};

export const selectTaskHome2 = async () => {
    try {
        const tasks = await Task2.find();
        return tasks;
    } catch (error) {
        throw new Error('Error al obtener las tareas desde la base de datos');
    }
};

export const selectOneTask2 = async (taskId) => {
    return await Task2.findById(taskId).populate("user");
};

export const deleteTaskById2 = async (taskId) => {
    return await Task2.findByIdAndDelete(taskId);
};

export const updateTaskById2 = async (taskId, taskData) => {
    return await Task2.findByIdAndUpdate(taskId, taskData, { new: true });
};