const express = require('express');
const path = require('path');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const sql = require('mssql');

const app = express();
const PORT = process.env.PORT || 2427;

const config = {
	user: '',
	password: '',
	server: '',
	database: '',
	opction: {
		encrypt: true // Because we are using Microsoft Azure
	}
};
sql.connect(config).catch(debug);

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('tiny'));

app.listen(PORT, () =>
	debug(chalk.red(`Server is running at port `) + chalk.green(PORT))
);