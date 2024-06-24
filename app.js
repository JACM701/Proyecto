const express = require('express');
const bodyParser = require('body-parser');
const sql = require('mssql');
const dbConfig = require('./dbConfig');

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

sql.connect(dbConfig, err => {
    if (err) console.log(err);
    else console.log('Connected to SQL Server');
});

app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/students', require('./routes/studentRoutes'));
app.use('/api/teachers', require('./routes/teacherRoutes'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

