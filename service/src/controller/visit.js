import { createVisitService, getAllVisitsService } from "../service/visit.js";

export const createVisit = async (req, res) => {
    try {
        const { visitName, dui, numPlaca, visitHouse, date } = req.body;

        const newVisit = await createVisitService({
            visitName,
            dui,
            numPlaca,
            visitHouse,
            date
        });

        res.json(newVisit);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

export const getAllVisits = async (req, res) => {
    try {
        const visits = await getAllVisitsService();
        res.json(visits);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};