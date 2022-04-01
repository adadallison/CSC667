const { request } = require('express');
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://admin:hello123@pumpkin.2cf9l.mongodb.net/appDB?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


client.connect(err => {
    const db = client.db('UserDB')

    const port = 4008;
    const express = require('express');
    const app = express();

    app.use(express.json());

    // This needs to be changed in order to allow for only show the logged in users posts
    app.get('/api/login/login', (req, res) => {
        console.log("THIS IS CALLED")
        console.log(req.query.username);
        console.log(req.query.password);


        db.collection('users').find({}).toArray(function (err, result) {
            // the variable result is an array of the documents, do something with them
            console.log("/API/login: " + result)    // this will print the documents from the collection
            var check = false;
            result.forEach((item) => {
                if (req.query.username == item.username && req.query.password === item.password) {
                    check = true;
                }
            })
            if (check) {
                res.send("valid");
            } else {
                res.send("invalid");
            }

        })

    })
    app.get('/api/login/register', (req, res) => {

        console.log("THIS REGISTER IS CALLED")
        console.log(req.query.username);
        console.log(req.query.password);


        db.collection('users').find({}).toArray(function (err, result) {
            // the variable result is an array of the documents, do something with them
            console.log("/API/register: " + result)    // this will print the documents from the collection
            var check = false;
            result.forEach((item) => {
                if (req.query.username == item.username) {
                    check = true;
                }
            })
            if (check) {
                res.send("invalid");
            } else {
                db.collection('users')
                    .insertOne({
                        username: req.query.username,
                        password: req.query.password,
                    })
            }
        }
        )

        res.send("invalid");
    })

    app.listen(port, () => console.log(`Listening on port ${port}`))
})

