/* eslint-disable no-console */
import * as bodyParser from 'body-parser';
import cors from 'cors';
import express, { Router, Request, Response } from 'express';
import { loginController } from './controllers/login';
import { getuserFeedbacksController } from './controllers/get-user-feedbacks';
import { getUserProfileController } from './controllers/get-user-profile';
import { getAllUsersController } from './controllers/get-all-users';
import './middleware/env';

const app = express();
const router = Router();

const allowedOrigins = [
  'http://localhost:9000'
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = `invalid cors for '${origin}'`;
      console.log(msg);
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

router.post('/login', loginController);
router.get('/getUserFeedbacks/:uid', getuserFeedbacksController);
router.get('/getUserProfile/:uid', getUserProfileController);
router.get('/getAllUsers/', getAllUsersController);
router.get('/', (req: Request, res: Response) => {
  res.send('<div>hey you!</div>');
});

app.use('/', router);

const port = process.env.API_PORT || 3001;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
