import { 
    insertNewTask2, 
    selectTheTask2, 
    selectTheTaskHome2,
    selectOneTaskById2,
    deleteTaskId2,
    updateTaskId2
} from "../service/task.two.js";

export const createTask2 = async (req, res) => {
    const { title, description, image, date } = req.body;
    try {
        const newTask = {
            title,
            description,
            image, 
            date,
            user: req.user.id
        };

        const saveTask = await insertNewTask2(newTask);
        return res.json(saveTask);
    } catch (error) {
        return res.status(500).json({ message: "Error al crear un task" });
    }
};

export const getTask2 = async (req, res) => {
    try {
        const tasks = await selectTheTask2(req.user.id );
        return res.json(tasks);
    } catch (error) {
        return res.status(402).json({ message: "Error al obtener las tareas" });
    }
};

export const getTaskHome2 = async (req, res) => {
    try {
        const tasks = await selectTheTaskHome2();
        return res.json(tasks);  
    } catch (error) {
        console.error('Error en la solicitud:', error);
        if (!res.headersSent) {
            return res.status(500).json({ message: "Error al obtener las tareas", error: error.message });
        }
    }
};

export const getOneTask2 = async (req, res) => {
    try {
        const task = await selectOneTaskById2(req.params.id);
        return res.json(task);
    } catch (error) {
        return res.status(404).json({ message: "Tarea no encontrada" });
    }
};

export const deleteTask2 = async (req, res) => {
    try {
        await deleteTaskId2(req.params.id);
        return res.sendStatus(204); 
    } catch (error) {
        return res.status(404).json({ message: "Task no encontrado" });
    }
};

export const updateTask2 = async (req, res) => {
    try {
        const task = await updateTaskId2(req.params.id, req.body);
        return res.json(task);
    } catch (error) {
        return res.status(404).json({ message: "Task no encontrado" });
    }
};
