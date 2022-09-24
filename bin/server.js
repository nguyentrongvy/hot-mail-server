// @ts-check

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const { getCORSOrigin } = require('../config');
const { attachResponseBuilder } = require('../common/express-builder');

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(helmet());

app.get('/ping', (_, res) => res.send('pong'));

app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true,
}));

app.use(attachResponseBuilder);

module.exports = app;
