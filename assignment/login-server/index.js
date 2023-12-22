const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')
require('dotenv').config();

app.use(express.json())
app.use(cors())


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASSWORD}@cluster0.58knn8l.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri)

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
 

  try{
    await client.connect();
    const OrderCollection=client.db('login').collection('userlogin')
    const OnlineBooking=client.db('Restaurant').collection('bookings')
    const Order=client.db('Restaurant').collection('order');

    app.post('/user', async(req, res)=>{
          query=req.body
          const result =await OrderCollection.insertOne(query)
          console.log(result)
          res.send(result)
    })
    app.post('/bookings', async(req, res)=>{
      const query = req.body
      const result = await OnlineBooking.insertOne(query)
      res.send(result)
    })
    app.get('/order', async(req, res)=>{
      const query={}
      const result = await Order.find(query).toArray()
      res.send(result)
      
    });

  }


  finally {

  }
}
run().catch(console.dir);



app.get('/',async(req,res)=>{
    res.send('app is running');
})
app.listen(port,async(req,res)=>{
    console.log('app is listening on port',port);
})