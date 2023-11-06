import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from "helmet";
import cookieParser from 'cookie-parser';
import {normalizePort} from "./utils";

dotenv.config();

const DEFAULT_SERVER_PORT = 6000;
const port = normalizePort(process.env.PORT || DEFAULT_SERVER_PORT);

const app = express();

// middleware
app.use(helmet({
    contentSecurityPolicy: false,
}));
app.use(cors(
    {
        origin: 'http://localhost:3000',
        credentials: true,
    }
));

app.use(cookieParser());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// server
app.listen(port, () => {
    console.log(`server has started on port ${port}`)
})

app.get('/', (req, res) => {
    console.log('Home page');
    res.send('<h1>Home page</h1>')
});

app.post('/ajax', (req, res) => {
    const {username, password} = req.body.data;

    if (username === '123' && password === '123') {
        res.cookie('username', username);
        res.status(201).end();
    } else {
        res.status(401).end();
    }

});

app.get('/user', (req, res) => {
    console.log('req.cookies: ', req.cookies);
    const username = req.cookies.username;
    console.log('username: ', username);
    res.json({username});
});