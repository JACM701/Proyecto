const sql = require('mssql');
const dbConfig = require('../dbConfig');

const Enrollment = {};

Enrollment.getAll = async () => {
    try {
        const pool = await sql.connect(dbConfig);
        const result = await pool.request().query('SELECT * FROM Enrollments');
        return result.recordset;
    } catch (err) {
        console.log(err);
    }
};

Enrollment.create = async enrollmentData => {
    try {
        const pool = await sql.connect(dbConfig);
        const result = await pool.request()
            .input('studentId', sql.Int, enrollmentData.studentId)
            .input('courseId', sql.Int, enrollmentData.courseId)
            .query('INSERT INTO Enrollments (studentId, courseId) VALUES (@studentId, @courseId)');
        return result.rowsAffected;
    } catch (err) {
        console.log(err);
    }
};

Enrollment.update = async (id, enrollmentData) => {
    try {
        const pool = await sql.connect(dbConfig);
        const result = await pool.request()
            .input('id', sql.Int, id)
            .input('studentId', sql.Int, enrollmentData.studentId)
            .input('courseId', sql.Int, enrollmentData.courseId)
            .query('UPDATE Enrollments SET studentId = @studentId, courseId = @courseId WHERE id = @id');
        return result.rowsAffected;
    } catch (err) {
        console.log(err);
    }
};

Enrollment.delete = async id => {
    try {
        const pool = await sql.connect(dbConfig);
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query('DELETE FROM Enrollments WHERE id = @id');
        return result.rowsAffected;
    } catch (err) {
        console.log(err);
    }
};

module.exports = Enrollment;
