const { Timestamp } = require('mongodb');
const { mongo } = require('mongoose');

const env = require('dotenv').config();
const mongoose = require('mongoose');

const connect = mongoose.connect(process.env.MONGODB)
    .then(() => {
        console.log("connected to Task database")

    })
    .catch(() => {
        console.log("error while connecting to model databse")
    })

const schema =  new mongoose.Schema({
   
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'General',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tags: {
        type: Array,
        required: true
    },
    payment: {
        type: String,
        required: true
    },
    

    
},
{
    timestamps: true
})

const TaskModel =   mongoose.model('Task', schema);


module.exports = TaskModel;