const express = require('express');
const app = express();
const env = require('dotenv').config();
const model = require('./Models/model');
const register = require('./Routes/Register');
const login = require('./Routes/Login');
const createTask = require('./Routes/taskRoute');
const displayTask = require('./Routes/displayTask')
const updateTask = require('./Routes/updateTaskRoute');
const deleteTask = require('./Routes/deleteTask');
const freelancerProfile = require('./Routes/freelancerProfile')
const cors = require('cors')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/register', register);
app.use('/login', login);
app.use('/createtask', createTask);
app.use('/displaytask', displayTask);
app.use('/updatetask', updateTask);
app.use('/deletetask', deleteTask);
app.use('/freelanceprofile', freelancerProfile);









app.listen(process.env.PORT || 5000, ()=>{
    console.log(`Server is running on port ${process.env.PORT  || 5000}`);
})