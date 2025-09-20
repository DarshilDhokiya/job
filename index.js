require('dotenv').config(); // Must be first

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const connect = require('./config/db');

const authRoute = require('./Routes/authRoute');
const jobRoute = require('./Routes/jobRoute');

connect();

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', authRoute);
app.use('/jobs', jobRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
