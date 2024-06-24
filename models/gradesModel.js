const sql = require('mssql');
const dbConfig = require('../dbConfig');

const Grades = {};

Grades.getAll = async () => {
    try {
        const pool = await sql.connect(dbConfig);
        const result = await pool.request().query('SELECT * FROM Grades');
        return result.recordset;
    } catch (err) {
        console.log(err);
    }
};

Grades.create = async gradeData => {
    try {
        const pool = await sql.connect(dbConfig);
        const result = await pool.request()
            .input('studentId', sql.Int, gradeData.studentId)
            .input('courseId', sql.Int, gradeData.courseId)
            .input('grade', sql.Decimal, gradeData.grade)
            .query('INSERT INTO Grades (studentId, courseId, grade) VALUES (@studentId, @courseId, @grade)');
        return result.rowsAffected;
    } catch (err) {
        console.log(err);
    }
};

Grades.update = async (id, gradeData) => {
    try {
        const pool = await sql.connect(dbConfig);
        const result = await pool.request()
            .input('id', sql.Int, id)
            .input('studentId', sql.Int, gradeData.studentId)
            .input('courseId', sql.Int, gradeData.courseId)
            .input('grade', sql.Decimal, gradeData.grade)
            .query('UPDATE Grades SET studentId = @studentId, courseId = @courseId, grade = @grade WHERE id = @id');
        return result.rowsAffected;
    } catch (err) {
        console.log(err);
    }
};

Grades.delete = async id => {
    try {
        const pool = await sql.connect(dbConfig);
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query('DELETE FROM Grades WHERE id = @id');
        return result.rowsAffected;
    } catch (err) {
        console.log(err);
    }
};

module.exports = Grades;
