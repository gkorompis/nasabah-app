// import express from 'express';
// import nasabah from './inputs/nasabah.js';
// import print_report from './inputs/print_report.js';
// import check_points from './inputs/check_points';
// import transactions from './inputs/transactions';

const express = require('express');
const nasabah = require('./inputs/nasabah.js');
const print_report = require('./inputs/print_report.js');
const check_points = require('./inputs/check_points.js');
const transactions = require('./inputs/transactions.js');

const pool = require('./db.js');



const app = express()
//define routes
app.get('/api/psql-nasabah', async (req, res)=>{
    try {
        const {rows} = await pool.query('SELECT * FROM nasabah');
        res.json(rows);
    } catch (err){
        console.log(err.message);
    };
});
app.get('/api/psql-transactions', async (req, res)=>{
    try {
        const {rows} = await pool.query('SELECT * FROM transactions');
        res.json(rows);
    } catch (err){
        console.log(err.message);
    };
});
app.get('/api/psql-check_points', async (req, res)=>{
    try {
        const {rows} = await pool.query('SELECT * FROM check_points');
        res.json(rows);
    } catch (err){
        console.log(err.message);
    };
});
app.get('/api/psql-print_report', async (req, res)=>{
    try {
        const {rows} = await pool.query('SELECT * FROM print_report');
        res.json(rows);
    } catch (err){
        console.log(err.message);
    };
});

app.get('/', (req, res)=>{
    res.send('API is running...')
});

// app.get('/api/nasabah', (req, res)=>{
//     res.json(nasabah);
// });

app.get('/api/print_report', (req, res)=>{
    res.json(print_report);
});

app.get('/api/check_points', (req, res)=>{
    res.json(check_points);
});

app.get('/api/transactions', (req, res)=>{
    res.json(transactions);
});




const PORT = 5000;
app.listen(PORT, console.log(`Server running on port ${PORT}`));