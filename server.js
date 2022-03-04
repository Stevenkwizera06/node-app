// const { MongoClient} = require('mongodb');

// async function main() {
//     const url = "mongodb+srv://demo:wakaso@06@cluster0.empua.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

//     const client = new MongoClient(url);

//     try {
//         await client.connect();
//         await listDatabases(client);

//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close();
//     }
// }

// main().catch(console.error);

// async function listDatabases(client) {
//     const databasesList = await client.db().admin().listDatabases();

//     console.log("Databases:");
//     databasesList.databases.forEach(db => {
//         console.log(`-${db.name}`);
//     })
// }