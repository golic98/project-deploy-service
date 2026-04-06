import Visit from "../model/visit.js";

export const createVisitRepo = async (visitData) => {
    return await Visit.create(visitData);
};

export const getAllVisitsRepo = async () => {
    return await Visit.find();
};