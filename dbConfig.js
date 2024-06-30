const sql = require('mssql');

// Configuración para la conexión a SQL Server
const config = {
    user: 'Josue',
    password: '1234',
    server: 'JOSUECHUC', // Puede ser una dirección IP o un nombre
    database: 'CollegueAdmins',
    options: {
        encrypt: true, // Si estás usando Azure, es recomendable activar la opción de cifrado
        enableArithAbort: true // Para evitar problemas con las operaciones aritméticas
    }
};

async function consultarAlumnos() {
    try {
        // Conectarse a la base de datos
        await sql.connect(config);

        // Consulta SQL para obtener todos los alumnos
        const result = await sql.query`SELECT * FROM Alumnos`;

        // Imprimir resultados en consola
        console.dir(result);

    } catch (err) {
        // Manejo de errores
        console.error('Error al conectar o consultar la base de datos', err);
    } finally {
        // Cerrar la conexión después de usarla
        sql.close();
    }
}

// Llamar a la función para ejecutar la consulta
consultarAlumnos();