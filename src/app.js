import express from 'express';
import logger from 'morgan';
import cors from 'cors';
const helmet = require('helmet');
import userRoute from './routes/auth';
import schoolRoute from './routes/school';
// import meetupRoute from './routes/meetupRoutes';
import returnError from './middleware/errorHandler';

const app = express();

app.use(helmet());
app.use(logger('common'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use('/api/v1', userRoute, schoolRoute);

app.all('*', (req, res) => {
  res.redirect(301, '/api/v1');
});
// because u passed something to next() it will terminate the call stack and call this.
app.use((err, req, res, next) => {
  returnError(err, res);
});

export default app;
