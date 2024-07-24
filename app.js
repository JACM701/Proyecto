const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const port = 3000;
const path = require('path');

// Configurar la conexión a la base de datos
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'tu_contraseña',
    database: 'Colegio'
});

// Conectar a MySQL
connection.connect(err => {
    if (err) {
        console.error('Error al conectar a MySQL:', err);
        return;
    }
    console.log('Conectado a MySQL');
});

// Configurar middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para agregar maestros
app.post('/api/teachers', (req, res) => {
    const { name, password } = req.body;
    const query = 'INSERT INTO teachers (name, password) VALUES (?, ?)';
    connection.query(query, [name, password], (err, results) => {
        if (err) {
            console.error('Error al insertar maestro:', err);
            res.status(500).json({ message: 'Error en el servidor' });
            return;
        }
        res.status(201).json({ message: 'Maestro agregado exitosamente' });
    });
});

// Ruta para editar maestros
app.put('/api/teachers/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const query = 'UPDATE teachers SET name = ? WHERE id = ?';
    connection.query(query, [name, id], (err, results) => {
        if (err) {
            console.error('Error al actualizar maestro:', err);
            res.status(500).json({ message: 'Error en el servidor' });
            return;
        }
        res.status(200).json({ message: 'Maestro actualizado exitosamente' });
    });
});

// Ruta para eliminar maestros
app.delete('/api/teachers/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM teachers WHERE id = ?';
    connection.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error al eliminar maestro:', err);
            res.status(500).json({ message: 'Error en el servidor' });
            return;
        }
        res.status(200).json({ message: 'Maestro eliminado exitosamente' });
    });
});

// Ruta para obtener todos los maestros
app.get('/api/teachers', (req, res) => {
    const query = 'SELECT * FROM teachers';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error al obtener maestros:', err);
            res.status(500).json({ message: 'Error en el servidor' });
            return;
        }
        res.status(200).json(results);
    });
});

// Ruta para agregar estudiantes
app.post('/api/students', (req, res) => {
    const { name, password } = req.body;
    const query = 'INSERT INTO students (name, password) VALUES (?, ?)';
    connection.query(query, [name, password], (err, results) => {
        if (err) {
            console.error('Error al insertar estudiante:', err);
            res.status(500).json({ message: 'Error en el servidor' });
            return;
        }
        res.status(201).json({ message: 'Estudiante agregado exitosamente' });
    });
});

// Ruta para eliminar estudiantes
app.delete('/api/students/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM students WHERE id = ?';
    connection.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error al eliminar estudiante:', err);
            res.status(500).json({ message: 'Error en el servidor' });
            return;
        }
        res.status(200).json({ message: 'Estudiante eliminado exitosamente' });
    });
});

// Ruta para obtener todos los estudiantes
app.get('/api/students', (req, res) => {
    const query = 'SELECT * FROM students';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error al obtener estudiantes:', err);
            res.status(500).json({ message: 'Error en el servidor' });
            return;
        }
        res.status(200).json(results);
    });
});

// Ruta de autenticación de usuario
app.post('/index', (req, res) => {
    const { username, password, role } = req.body;

    let table = role === 'maestro' ? 'teachers' : 'students';
    let query = 'SELECT * FROM ?? WHERE name = ? AND password = ?';
    connection.query(query, [table, username, password], (err, results) => {
        if (err) {
            console.error('Error en la consulta:', err);
            res.status(500).json({ message: 'Error en el servidor' });
            return;
        }

        if (results.length > 0) {
            res.json({ message: 'Inicio de sesión exitoso' });
        } else {
            res.status(401).json({ message: 'Credenciales incorrectas' });
        }
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
