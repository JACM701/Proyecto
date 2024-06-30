const express = require('express');
const app = express();
const sql = require('mssql');

const config = {
    user: 'Proyecto',
    password: '172005',
    server: 'JOSUECHUC',
    database: 'CollegueAdmins',
    options: {
        encrypt: true,
        enableArithAbort: true
    }
};

async function testConnection() {
    try {
        await sql.connect(config);
        console.log('Conexión establecida correctamente.');
    } catch (error) {
        console.error('Error al conectar:', error);
    } finally {
        sql.close();
    }
}

testConnection();


// Endpoint para la consulta de datos
app.get('/consultarDatos', async (req, res) => {
    try {
        await sql.connect(config);
        const result = await sql.query`SELECT * FROM Alumnos`; // Cambia 'Alumnos' por la tabla que desees consultar
        res.json(result.recordset);
    } catch (error) {
        console.error('Error al consultar los datos:', error);
        res.status(500).send('Error al consultar los datos');
    } finally {
        // sql.close(); // No es necesario cerrar la conexión manualmente con mssql
    }
});

// Servir la página HTML estática
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
