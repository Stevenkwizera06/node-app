// // import express from 'express';
// // const app = express();

// // app.get('/', function (req, res) {
// //   res.send('Hello World!');
// // });

// // app.listen(3000, function () {
// //   console.log('Example app listening on port 3000!');
// // });

// const { MongoClient} = require('mongodb');
// const mongoose = require('mongoose')
// const users = require('./server/model/users')
// // const port = 8000;

// console.log('users require => ',users)



async function main() {
    const url = "mongodb+srv://demo1:wakaso06@cluster0.empua.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

    const client = new MongoClient(url);

    try {
        await client.connect();
        await listDatabases(client);

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

async function listDatabases(client) {
    const databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => {
        console.log(`-${db.name}`);
    })
}

