const express = require('express');
const app = express();
//const mongodb = require('mongodb').MongoClient();
const mongoose = require('mongoose');


const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:4200', // replace with your front-end URL
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


const database = module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
  }
  try{
   // mongodb.connect('mongodb+srv://jana123:jana123@cluster0.i9r9ugk.mongodb.net/Mental_Health?retryWrites=true&w=majority',connectionParams)
    mongoose.connect('mongodb+srv://jana123:jana123@cluster0.i9r9ugk.mongodb.net/Mental_Health?retryWrites=true&w=majority')
    console.log("connected to database successfully");
  } catch(error){
console.log("database connection failed");
console.log(error);
  }
}


database();

app.listen(5000, () => {
    console.log('Server started on port 5000');
  });

  app.get('/Patients', async (req, res) => {
    try {
      const db = mongoose.connection;
      const result = await db.collection('Patients').find({}).toArray();
      console.log(result); // log the result to the console
      res.send(result);
    } catch (err) {
      console.log(err);
      res.status(500).send('Error retrieving data');
    }
  });