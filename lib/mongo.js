const { MongoClient, ObjectID } = require('mongodb');
const { config } = require('../config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = encodeURIComponent(config.dbName);

var MONGO_URI = `mongodb://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}`;

class Mongolib {
  constructor() {
    this.client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    this.dbName = DB_NAME;
  }
  connect() {
    if (!Mongolib.connection) {
      Mongolib.connection = new Promise((resolve, reject) => {
        this.client.connect(err => {
          if (err) {
            reject(err);
          }
          console.log('connection was added');
          resolve(this.client.db(this.dbName));
        });
      });
    }
    return Mongolib.connection;
  }

  getAll(collection, query) {
    return this.connect().then(db => {
      return db
        .collection(collection)
        .find(query)
        .toArray();
    });
  }
  get(collection, id) {
    return this.connect().then(db => {
      return db.collection(collection).findOne({ _id: ObjectID(id) });
    });
  }

  create(collection, data) {
    return this.connect()
      .then(db => {
        return db.collection(collection).insertOne(data);
      })
      .then(result => result.insertedId);
  }
  update(collection, id, data) {
    return this.connect()
      .then(db => {
        return db
          .collection(collection)
          .updateOne({ _id: ObjectID(id) }, { $set: data }, { upsert: true });
      })
      .then(result => result.upsertedId || id);
  }
  delete(collection, id) {
    return this.connect()
      .then(db => {
        db.collection(collection).deleteOne({ _id: ObjectID(id) });
      })
      .then(() => id);
  }
}

module.exports = Mongolib;
