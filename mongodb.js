import { MongoClient, ObjectID } from 'mongodb';

const url = 'mongodb://localhost:27017';
const dbName = 'task-manager';
MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if(error){
        return console.log('Unable to connect to database');
    }
    const db = client.db(dbName);
    db.collection('tasks').deleteOne({
        description: 'Clean the house'
    }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    });

    console.log('Connected correctly');
});
