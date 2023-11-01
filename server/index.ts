import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';


const DEFAULT_SERVER_PORT = 5000;

const app = express();
const port = process.env.PORT || DEFAULT_SERVER_PORT;

app.get('/', (req, res) => {
    res.send('Home page 1');
})

app.get('/users/:username/:id', (req, res) => {
    res.send(`User ID: ${JSON.stringify(req.query)}`);
})

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

import 'db';