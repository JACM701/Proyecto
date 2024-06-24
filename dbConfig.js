const sql = require('mssql');

const config = {
    user: 'Proyecto',
    password: '12345',
    server: 'DESKTOP-A7K63MD\SQL2024',
    database: 'Proyecto',
    options: {
        encrypt: true, // Use this if you're on Windows Azure
        trustServerCertificate: true // Change to true for local dev / self-signed certs
    }
};

module.exports = config;
