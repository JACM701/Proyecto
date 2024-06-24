const sql = require('mssql');
const dbConfig = require('../dbConfig');

const Attendance = {};

Attendance.getAll = async () => {
    try {
        const pool = await sql.connect(dbConfig);
        const result = await pool.request().query('SELECT * FROM Attendance');
        return result.recordset;
    } catch (err) {
        console.log(err);
    }
};

Attendance.create = async attendanceData => {
    try {
        const pool = await sql.connect(dbConfig);
        const result = await pool.request()
            .input('studentId', sql.Int, attendanceData.studentId)
            .input('courseId', sql.Int, attendanceData.courseId)
            .input('date', sql.Date, attendanceData.date)
            .input('status', sql.VarChar, attendanceData.status)
            .query('INSERT INTO Attendance (studentId, courseId, date, status) VALUES (@studentId, @courseId, @date, @status)');
        return result.rowsAffected;
    } catch (err) {
        console.log(err);
    }
};

Attendance.update = async (id, attendanceData) => {
    try {
        const pool = await sql.connect(dbConfig);
        const result = await pool.request()
            .input('id', sql.Int, id)
            .input('studentId', sql.Int, attendanceData.studentId)
            .input('courseId', sql.Int, attendanceData.courseId)
            .input('date', sql.Date, attendanceData.date)
            .input('status', sql.VarChar, attendanceData.status)
            .query('UPDATE Attendance SET studentId = @studentId, courseId = @courseId, date = @date, status = @status WHERE id = @id');
        return result.rowsAffected;
    } catch (err) {
        console.log(err);
    }
};

Attendance.delete = async id => {
    try {
        const pool = await sql.connect(dbConfig);
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query('DELETE FROM Attendance WHERE id = @id');
        return result.rowsAffected;
    } catch (err) {
        console.log(err);
    }
};

module.exports = Attendance;
