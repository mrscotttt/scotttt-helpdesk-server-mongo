require('./dbMongo');
var moment = require('moment');
const { v4: uuidv4 } = require('uuid');
const Ticket = require('./ticketModel');

const getTicket = async (req, res) => {
    try{
        const result = await Ticket.find({});
        // console.log("get item")
        // console.log(result)
        res.status(200).send(result)
    }
    catch(err){
        res.status(400).send({ message: err })
        // // console.log("err")
    }
};

const getTicketById = async (req, res) => {
    // console.log("get id",req.params.id)
    try{
        const result = await Ticket.findOne({"ticketId":req.params.id})
        // console.log("success")
        res.status(200).send(result)
    }
    catch(err){
        res.status(400).send({ message: err })
        // console.log("err",err)
    }
};

const addTicket = async (req, res) => {
    let now = moment().valueOf()
    let ticket = {
        ticketId: uuidv4(),
        createTime: req.body.createTime ? req.body.createTime : now,
        description: req.body.description,
        title: req.body.title,
        status: req.body.status,
        contact:{
            name: req.body.contact.name,
            faculty: req.body.contact.faculty,
            major: req.body.contact.major,
            studentId: req.body.contact.studentId,
            telephone: req.body.contact.telephone,
            year: req.body.contact.year,
        },
        lastUpdate: now,
    }
    const params = new Ticket(ticket)
    try{
        const result = await params.save()
        // console.log("add success")
        // console.log(ticket)
        res.status(200).send(result)
    }
    catch(err){
        res.status(400).send({ message: err })
        // console.log("err")
    }
};

const updateTicket = async (req, res) => {
    let now = moment().valueOf()
    let ticket = {
        ticketId: req.body.ticketId,
        createTime: req.body.createTime ? req.body.createTime : now,
        description: req.body.description,
        title: req.body.title,
        status: req.body.status,
        contact:{
            name: req.body.contact.name,
            faculty: req.body.contact.faculty,
            major: req.body.contact.major,
            studentId: req.body.contact.studentId,
            telephone: req.body.contact.telephone,
            year: req.body.contact.year,
        },
        lastUpdate: now,
    }
    try{
        const result = await Ticket.findOneAndUpdate({"ticketId":req.body.ticketId}, { $set: ticket })
        // console.log("add success")
        // console.log(ticket)
        res.status(200).send(result)
    }
    catch(err){
        res.status(400).send({ message: err })
        // console.log("err")
    }
};

module.exports = {
    getTicket,
    // updateStatusTicket,
    getTicketById,
    addTicket,
    updateTicket
};

