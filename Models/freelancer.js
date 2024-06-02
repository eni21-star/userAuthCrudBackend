const { Timestamp } = require('mongodb');
const { mongo } = require('mongoose');

const mongoose = require('mongoose');

const connect = mongoose.connect(process.env.MONGODB)
    .then(() => {
        console.log("connected to FREELACE database")

    })
    .catch(() => {
        console.log("error while connecting to model databse")
    })

const schema = new mongoose.Schema({

    user: 
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'General',
        required: true
    },

    description:
    {
        type: String,
        required: true
    }
},
{
    timestamps: true
})

const FreelancerModel = mongoose.model('Freelancer', schema);


module.exports = FreelancerModel;