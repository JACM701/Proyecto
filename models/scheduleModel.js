const sql = require('mssql');
const dbConfig = require('../dbConfig');

const Schedule = {};

Schedule.getAll = async () => {
    try {
        const pool = await sql.connect(dbConfig);
        const result = await pool.request().query('SELECT * FROM Schedules');
        return result.recordset;
    } catch (err) {
        console.log(err);
    }
};

Schedule.create = async scheduleData => {
    try {
        const pool = await sql.connect(dbConfig);
        const result = await pool.request()
            .input('courseId', sql.Int, scheduleData.courseId)
            .input('day', sql.VarChar, scheduleData.day)
            .input('time', sql.VarChar, scheduleData.time)
            .query('INSERT INTO Schedules (courseId, day, time) VALUES (@courseId, @day, @time)');
        return result.rowsAffected;
    } catch (err) {
        console.log(err);
    }
};

Schedule.update = async (id, scheduleData) => {
    try {
        const pool = await sql.connect(dbConfig);
        const result = await pool.request()
            .input('id', sql.Int, id)
            .input('courseId', sql.Int, scheduleData.courseId)
            .input('day', sql.VarChar, scheduleData.day)
            .input('time', sql.VarChar, scheduleData.time)
            .query('UPDATE Schedules SET courseId = @courseId, day = @day, time = @time WHERE id = @id');
        return result.rowsAffected;
    } catch (err) {
        console.log(err);
    }
};

Schedule.delete = async id => {
    try {
        const pool = await sql.connect(dbConfig);
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query('DELETE FROM Schedules WHERE id = @id');
        return result.rowsAffected;
    } catch (err) {
        console.log(err);
    }
};

module.exports = Schedule;
