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
   
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'General',
        required: true
    },

    
},
{
    timestamps: true
})

const clientModel =   mongoose.model('Client', schema);


module.exports = clientModel;