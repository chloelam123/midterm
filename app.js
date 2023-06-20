//import express & mongoose dependencies
const express = require('express');

//build Express app
const app = express();

//MongoDB connection
const mongoose = require('mongoose');
//import student model
const Student = require('./app/models/student.model');
const dbConfig = require('./config/database.config');

//configue express middleware
app.use(express.json());

//connect to MongoDB
mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('DB connection succeeful');
  })
  .catch(error => {
    console.error('DB connection is not successful', error);
  });

app.get('/', (req, res) => {
  res.json({
    message: 'It is working!!',
  });
});

require('./app/routes/student.routes')(app);

//create server
const port = 3000;
app.listen(port, () => {
  console.log('server is running!!');
});
