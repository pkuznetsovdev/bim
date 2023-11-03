import express, {Request, Response, NextFunction} from 'express';
import helmet from "helmet";
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

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
app.use(express.static('course/public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// app.use('/admin', validateUser);
// app.use(bodyParser.json());

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

app.all('*', (req, res) => {
    res.send('<h1>Any page</h1>')
});

function validateUser(req: Request, res: Response, next: NextFunction) {
    res.locals.validated = true;
    next();
}

app.listen(5000, () => {
    console.log(`Server is listening to PORT: 5000`);
});