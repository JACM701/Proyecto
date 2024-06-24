const sql = require('mssql');
const dbConfig = require('../dbConfig');

const Student = {};

Student.getAll = async () => {
    try {
        const pool = await sql.connect(dbConfig);
        const result = await pool.request().query('SELECT * FROM Students');
        return result.recordset;
    } catch (err) {
        console.log(err);
    }
};

Student.create = async studentData => {
    try {
        const pool = await sql.connect(dbConfig);
        const result = await pool.request()
            .input('name', sql.VarChar, studentData.name)
            .input('email', sql.VarChar, studentData.email)
            .query('INSERT INTO Students (name, email) VALUES (@name, @email)');
        return result.rowsAffected;
    } catch (err) {
        console.log(err);
    }
};

Student.update = async (id, studentData) => {
    try {
        const pool = await sql.connect(dbConfig);
        const result = await pool.request()
            .input('id', sql.Int, id)
            .input('name', sql.VarChar, studentData.name)
            .input('email', sql.VarChar, studentData.email)
            .query('UPDATE Students SET name = @name, email = @email WHERE id = @id');
        return result.rowsAffected;
    } catch (err) {
        console.log(err);
    }
};

Student.delete = async id => {
    try {
        const pool = await sql.connect(dbConfig);
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query('DELETE FROM Students WHERE id = @id');
        return result.rowsAffected;
    } catch (err) {
        console.log(err);
    }
};

module.exports = Student;
