import { 
    insertTask2, 
    selectTask2, 
    selectTaskHome2,
    selectOneTask2,
    deleteTaskById2,
    updateTaskById2
} from "../repository/task.two.js";

export const insertNewTask2 = async (taskData) => {
    try {
        const newTask = await insertTask2(taskData);
        return newTask;
    } catch (error) {
        return new Error(error.message);
    }
};

export const selectTheTask2 = async (userId) => {
    try {
        return await selectTask2(userId);
    } catch (error) {
        return new Error(error.message);
    }
};

export const selectTheTaskHome2 = async () => {
    try {
        return await selectTaskHome2();
    } catch (error) {
        throw new Error(error.message);
    }
};

export const selectOneTaskById2 = async (taskId) => {
    try {
        const task = await selectOneTask2(taskId);

        if(!task) {
            throw new Error("Tarea no encontrada");
        } else {
            return task;
        }
    } catch (error) {
        return new Error(error.message);
    }
};

export const deleteTaskId2 = async (taskId) => {
    try {
        const task = await deleteTaskById2(taskId);

        if (!task) {
            throw new Error("Tarea no encontrada");
        } else {
            return task;
        }
    } catch (error) {
        return new Error(error.message);
    }
};

export const updateTaskId2 = async (taskId, taskData) => {
    try {
        const updateTask = await updateTaskById2(taskId, taskData);

        if (!updateTask) {
            throw new Error("Tarea no encontrada");
        } else {
            return updateTask;
        }
    } catch (error) {
        return new Error(error.message);
    }
};