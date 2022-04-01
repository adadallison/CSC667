const express = require('express');
const bodyParser = require('body-parser');
// const { MongoClient } = require('mongodb');
const redis = require('redis');
const client = redis.createClient({ host: process.env.REDIS_HOST || 'localhost' });

// monogo init
// const url = process.env.MONGO_HOST || 'mongodb://localhost:27017';
// const mongoClient = new MongoClient(url);

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://admin:hello123@pumpkin.2cf9l.mongodb.net/appDB?retryWrites=true&w=majority";
const mongoClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });



mongoClient.connect((err) => {
  if (err) console.log(err);
  const db = mongoClient.db('appDB');
  // move app logic in here
  const app = express();
  app.use(bodyParser.json());
  // sorry for spelling wrong :(

  // This posts new messages to the db
  app.post('/messanger/postMessage', (req, res) => {

    console.log("/MESSANGER/POSTMESSAGE: " + req.body.user);

    // first it gets the current messages of current inquiry and listing
    db.collection('listings').find({ "id": parseInt(req.body.listingId), "inquiries.id": req.body.id }).toArray()
      .then((res) => {
        const updateMessage = res;

        (updateMessage[0].inquiries[req.body.id].message).push([req.body.user,req.body.message])

        return updateMessage;
      })
      .then((updateMessage) => {
        
        // it then updates the messages with new messages ( could be improved to be less intensive )
        db.collection('listings').update({ "id": parseInt(req.body.listingId), "inquiries.id": req.body.id }, { $set: { inquiries: updateMessage[0].inquiries } })

      })
      .catch((e) => console.log(e));


      console.log(req.body.user + req.body.message)
    // publishes the message to websocket
    client.publish('testPublish', req.body.user + req.body.message);

    console.log("PUBLSIHED!")
    res.send('ok');
  });


  // have not used this yet
  app.get('/messanger/getMessages', (req, res) => {
    db.collection('test').find({}).toArray()
      .then((result) => {
        res.send(result.map(r => r.data));
      })
      .catch((e) => console.log(e));
  });

  app.listen(5000);
  // end app logic
});

