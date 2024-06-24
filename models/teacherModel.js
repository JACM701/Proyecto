const sql = require('mssql');
const dbConfig = require('../dbConfig');

const Teacher = {};

Teacher.getAll = async () => {
    try {
        const pool = await sql.connect(dbConfig);
        const result = await pool.request().query('SELECT * FROM Teachers');
        return result.recordset;
    } catch (err) {
        console.log(err);
    }
};

Teacher.create = async teacherData => {
    try {
        const pool = await sql.connect(dbConfig);
        const result = await pool.request()
            .input('name', sql.VarChar, teacherData.name)
            .input('email', sql.VarChar, teacherData.email)
            .query('INSERT INTO Teachers (name, email) VALUES (@name, @email)');
        return result.rowsAffected;
    } catch (err) {
        console.log(err);
    }
};

Teacher.update = async (id, teacherData) => {
    try {
        const pool = await sql.connect(dbConfig);
        const result = await pool.request()
            .input('id', sql.Int, id)
            .input('name', sql.VarChar, teacherData.name)
            .input('email', sql.VarChar, teacherData.email)
            .query('UPDATE Teachers SET name = @name, email = @email WHERE id = @id');
        return result.rowsAffected;
    } catch (err) {
        console.log(err);
    }
};

Teacher.delete = async id => {
    try {
        const pool = await sql.connect(dbConfig);
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query('DELETE FROM Teachers WHERE id = @id');
        return result.rowsAffected;
    } catch (err) {
        console.log(err);
    }
};

module.exports = Teacher;
