// app.js (o el nombre del archivo principal de tu aplicación)
// Requerir el módulo mysql
let mysql = require('mysql');

// Configurar los parámetros de conexión a MySQL
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', // El usuario que creaste en MySQL
    password: 'tu_contraseña', // La contraseña del usuario
    database: 'gary_goodsped;' // El nombre de la base de datos que creaste
});

// Conectar a MySQL
connection.connect(err => {
    if (err) {
        console.error('Error al conectar a MySQL:', err);
        return;
    }
    console.log('Conectado a MySQL');
});

// Ejemplo: Consulta a la base de datos
connection.query('SELECT * FROM usuarios', (err, results) => {
    if (err) {
        console.error('Error al ejecutar la consulta:', err);
        return;
    }
    console.log('Resultados de la consulta:', results);
});

// Desconectar de MySQL al salir de la aplicación
process.on('SIGINT', () => {
    connection.end(() => {
        console.log('Desconectado de MySQL');
        process.exit(0);
    });
});
