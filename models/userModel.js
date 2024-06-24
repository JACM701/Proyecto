const sql = require('mssql');

const User = {};

User.getAll = async () => {
    try {
        const pool = await sql.connect(dbConfig);
        const result = await pool.request().query('SELECT * FROM Users');
        return result.recordset;
    } catch (err) {
        console.log(err);
    }
};

User.create = async userData => {
    try {
        const pool = await sql.connect(dbConfig);
        const result = await pool.request()
            .input('name', sql.VarChar, userData.name)
            .input('email', sql.VarChar, userData.email)
            .query('INSERT INTO Users (name, email) VALUES (@name, @email)');
        return result.rowsAffected;
    } catch (err) {
        console.log(err);
    }
};

User.update = async (id, userData) => {
    try {
        const pool = await sql.connect(dbConfig);
        const result = await pool.request()
            .input('id', sql.Int, id)
            .input('name', sql.VarChar, userData.name)
            .input('email', sql.VarChar, userData.email)
            .query('UPDATE Users SET name = @name, email = @email WHERE id = @id');
        return result.rowsAffected;
    } catch (err) {
        console.log(err);
    }
};

User.delete = async id => {
    try {
        const pool = await sql.connect(dbConfig);
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query('DELETE FROM Users WHERE id = @id');
        return result.rowsAffected;
    } catch (err) {
        console.log(err);
    }
};

module.exports = User;
