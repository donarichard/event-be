import express from 'express';
import event from './event';
import booking from './booking';

const router = express.Router();

event(router);
booking(router);

export default router;
