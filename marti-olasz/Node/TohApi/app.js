const express = require('express');
const debug = require('debug')('app');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const { PORT: port } = process.env;

const Hero = require('./src/models/heroMode');

mongoose.connect('mongodb://localhost/heroes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.send('My server works!');
});

const heroRouter = require('./src/routes/heroRoutes')(Hero);

app.use('/heroes', heroRouter);

app.listen(port, debug(`Server is running at port ${port}PUT...`));
