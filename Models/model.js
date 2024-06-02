const { Timestamp } = require('mongodb');
const { mongo } = require('mongoose');

const mongoose = require('mongoose');

const connect = mongoose.connect(process.env.MONGODB)
    .then(() => {
        console.log("connected to Model database")

    })
    .catch(() => {
        console.log("error while connecting to model databse")
    })

const schema =  new mongoose.Schema({
   
    email: {
        type: String,
        required: true
    },

    username: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    role: {
        type: String,
        required: true
    },

    isAdmin : {
        type: Boolean,
        required: true
        
    }
    

    
},
{
    timestamps: true
})

const model =   mongoose.model('General', schema);


module.exports = model;