import { 
    createNewSchedule, 
    getAllSchedulesService
 } from "../service/vigilant.js";

export const createSchedule = async (req, res) => {
    try {
        const { name, lunes, martes, miercoles, jueves, viernes, sabado, domingo } = req.body;

        const scheduleData = { name, lunes, martes, miercoles, jueves, viernes, sabado, domingo };
        const saveSchedule = await createNewSchedule(scheduleData);
        res.json(saveSchedule);
    } catch (error) {
        console.log("Error al almacenar un horario");
    }
};

export const getAllSchedules = async (req, res) => {
    try {
        const schedules = await getAllSchedulesService();
        res.json(schedules);
    } catch (error) {
        console.log("Error al obtener resultados", error);
    }
};