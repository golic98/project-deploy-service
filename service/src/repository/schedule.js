import Schedule from "../model/schedule.js";

export const createSchedule = async(scheduleData) => {
    const newSchedule = new Schedule(scheduleData);
    return await newSchedule.save();
};

export const selectSchedule = async () => {
    return await Schedule.find();
};