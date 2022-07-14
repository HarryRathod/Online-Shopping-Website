const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let mongodbUrl = 'mongodb://0.0.0.0:27017';

if(process.env.MONGODB_URI){
    mongodbUrl = process.env.MONGODB_URI;
}

let database;

async function connectToDatabase() {
    const client = await MongoClient.connect(mongodbUrl);
    database = client.db('online-shop');
}

function getDb() {
    if (!database) {
        throw new Error('You must connect first!');
    }

    return database;
}

module.exports = {
    connectToDatabase: connectToDatabase,
    getDb: getDb
};