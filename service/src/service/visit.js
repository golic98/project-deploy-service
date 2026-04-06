import {
    createVisitRepo,
    getAllVisitsRepo
} from "../repository/visit.js";

export const createVisitService = async (visitData) => {
    if (!visitData.visitName || !visitData.dui) {
        throw new Error("Faltan datos obligatorios");
    }
    return await createVisitRepo(visitData);
};

export const getAllVisitsService = async () => {
    return await getAllVisitsRepo();
};