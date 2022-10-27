const mongoose = require('mongoose')
const Schema = mongoose.Schema

let ticketSchema = new Schema({
    ticketId: String,
    createTime: Number,
    description: String,
    title: String,
    status: String,
    contact:{
        name: String,
        faculty: String,
        major: String,
        studentId: String,
        telephone: String,
        year: String
    },
    lastUpdate: Number
})

const ticketModel = mongoose.model('helpdesks', ticketSchema)
module.exports = ticketModel