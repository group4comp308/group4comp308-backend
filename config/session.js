const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const config = require('./config');

module.exports = function (app) {

  console.log(process.env.NODE_ENV);
  console.log(config);

  app.use(session({
    key: 'sessionId',
    secret: config.sessionSecret,
    store: MongoStore.create({
      mongoUrl: config.dbUrl,
      dbName: config.db.database,
      autoRemove: 'interval',
      autoRemoveInterval: 60
    }),
    resave: false,
    saveUninitialized: true
  }));

}