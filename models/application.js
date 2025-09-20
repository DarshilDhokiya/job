const mongoose = require('mongoose')

const applicationSchema= new mongoose.Schema({

    name:String,
    email:String,
    resume:String
})

module.exports = mongoose.model('Application' ,applicationSchema )