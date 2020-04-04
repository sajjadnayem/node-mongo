const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();

app.use(cors());
app.use(bodyParser.json());

const dbUser = 'dbUser'
const pass = 'LOfO51doUaDVpSI8';

const users = ["Nayem", "Nabil", "Ratul", "Tamim", "Nifaz","Shamim"];

//database connection


const MongoClient = require('mongodb').MongoClient;
var uri = "mongodb://dbUser:LOfO51doUaDVpSI8@cluster0-shard-00-00-nqnv0.mongodb.net:27017,cluster0-shard-00-01-nqnv0.mongodb.net:27017,cluster0-shard-00-02-nqnv0.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("onlineStore").collection("products");
  // perform actions on the collection object
  collection.insertOne({
      name:'MObile',
      price: 2000,
      stock: 12
  },(err, res)=>{
     console.log('successfully inserted')
     if(err){
         console.log(err)
     }
     else
     {
         console.log('successfully inserted')
     } 
  })
  console.log('Database connected...')
  //client.close();
});



app.get('/', (req, res)=>{
    const fruit = {
        product : 'ada',
        price: 220

    }
    res.send(fruit);
})


app.get('/users/:id',(req, res)=>{
    const id = req.params.id;
    const name = users[id];
    res.send({id, name});
})

//post
app.post('/addUser',(req, res)=>{
    //save to database
    const user = req.body;
    user.id = 55;
    console.log(user);
    res.send(user);
}) 

app.listen(4200, () => console.log('Listening to port 4200')); 