import Timesheet from '../models/timesheet';

/**
 * Get the latest timesheet entry of the current worker.
 * @param {*} workerId 
 */
export const getLatestEntry = (workerId) => {
    try {
        return Timesheet.findOne({ raw: true, where: workerId, order: [['clockOutTime', 'DESC']] });
    } catch (error) {
        throw new Error(error);
    }
}

/**
 * Post a timesheet entry from frontend. 
 * If the previous entry does not have a clock out time, update the entry with the clock out time from the body.
 * If the previous entry has both clock in and clock out time and the body has the same clock in time with the previous timesheet entry, throw an Error object. 
 * Otherwise, create a new entry with the clock in/out time from the body.
 * @param {*} body 
 */
export const postEntry = async (body) => {
    const latestEntry = await Timesheet.findOne({ raw: true, where: { workerId: body.workerId }, order: [['clockOutTime', 'DESC']] });
    if (latestEntry && new Date(latestEntry.clockInTime).toString() == new Date(body.clockInTime).toString() && !latestEntry.clockOutTime) {
        return Timesheet.update(body, { where: { id: body.id } }).then(res => {
            return Timesheet.findOne({ raw: true, where: { workerId: body.workerId }, order: [['clockOutTime', 'DESC']] });
        });
    }
    else if (latestEntry && new Date(latestEntry.clockInTime).toString() == new Date(body.clockInTime).toString() && latestEntry.clockOutTime) {
        throw new Error();
    }
    else {
        return Timesheet.create(body);
    }
}
