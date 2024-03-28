import express from 'express';
import routes from './routes/index.js';


/*
import createError from 'http-errors';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
*/
const app = express();
routes(app);

// error handler
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send({message: 'Erro interno do servidor'});
});
// app.use(express.json());
/*
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

const __dirname = import.meta.dirname;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


*/
export default app;
