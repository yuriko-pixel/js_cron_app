import express from "express";
import { cron } from './api/cron.js';

const app = express();

app.use('/cron', cron);
