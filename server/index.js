require('dotenv').config();
const express = require('express'),
      app = express(),
      massive = require('massive'),
      session = require('express-session'),
      {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env;

app.use(express.json());
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {maxAge: 1000 * 60 * 60 * 24 * 365}
}));

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))
    console.log('DB Connected')
});