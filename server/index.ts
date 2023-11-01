import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

const DEFAULT_SERVER_PORT = 5000;
const port = process.env.PORT || DEFAULT_SERVER_PORT;

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// server
app.listen(port, () => {
    console.log(`server has started on port ${port}`)
})