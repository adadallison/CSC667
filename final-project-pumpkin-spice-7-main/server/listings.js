// This is the mongodb connection for atlas database
// just copy and paste these three lines of code
// Any questions just ask me!!! - Chris

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://admin:hello123@pumpkin.2cf9l.mongodb.net/appDB?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


// start of the listing api
// use an axios call to /api/listings to get the db information for all listings
client.connect(err => {
    const db = client.db('appDB')

    const port = 4006;
    const express = require('express');
    const app = express();

    app.use(express.json());

    app.get('/api/listings', (req, res) => {
        console.log("/API/LISTING IS CALLED")
        db.collection('listings').find({}).toArray(function (err, result) {
            // the variable result is an array of the documents, do something with them
            console.log("/API/LISTINGS: " + result)    // this will print the documents from the collection
            res.send(result)
        })
    })



    app.listen(port, () => console.log(`Listening on port ${4006}`))
    // module.exports = db;
})
