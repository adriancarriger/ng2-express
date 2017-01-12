import mongodb = require('mongodb');

import { dbUrl } from './config';

const MongoClient: mongodb.MongoClient = mongodb.MongoClient;

let db;
MongoClient.connect(dbUrl, (err, database) => {
  if (err) { return console.log(err); }
  db = database;
});

export function getTest(callback) {
  db.collection('quotes').find().toArray((err, results) => {
    if (err) { return console.log(err); }

    callback(results);
  });
}
