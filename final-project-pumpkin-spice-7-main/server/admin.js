// This is the mongodb connection for atlas database
// just copy and paste these three lines of code
// Any questions just ask me!!! - Chris

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://admin:hello123@pumpkin.2cf9l.mongodb.net/appDB?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


// start of the admin page
client.connect(err => {
    const db = client.db('appDB')

    const port = 4005;
    const express = require('express');
    const app = express();

    app.use(express.json());

    // This needs to be changed in order to allow for only show the logged in users posts
    app.get('/api/admin', (req, res) => {
        console.log("THIS IS CALLED")
        db.collection('listings').find({}).toArray(function (err, result) {
            // the variable result is an array of the documents, do something with them
            console.log(result)    // this will print the documents from the collection
            res.send(result)
        })
    })



    app.listen(port, () => console.log(`Listening on port ${port}`))
    // module.exports = db;
})
