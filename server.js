const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());
//  database = coffeeShop
// password = 4kRWjDa22Gu8RI8G

//  cWh9jwN5sXaRSir6
require("dotenv").config();

// console.log(process.env.db_name)
// console.log(process.env.db_key)

console.log(process.env.db_user);
console.log(process.env.db_password);

const uri = `mongodb+srv://${process.env.db_user}:${process.env.db_password}@cluster0.5tob0mc.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
    console.log("ok  connection");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Coffee shop making running server");
});

app.listen(port, () => {
  console.log(`Coffee shop making running server on port ${port}`);
});
