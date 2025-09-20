const { configDotenv } = require('dotenv')
const express = require('express')
const app =express()
const path = require('path')
const cookieParser = require('cookie-parser');
const connect = require('./config/db')
connect()

const authRoute = require('./Routes/authRoute')
const jobRoute =require('./Routes/jobRoute')


require('dotenv').config()

app.set('views' , path.join(__dirname,'views'))
app.set('view engine' , 'ejs')

app.use(cookieParser());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.use('/' ,authRoute)
app.use('/jobs',jobRoute)


app.listen(process.env.LOCAL_HOST)