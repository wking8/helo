require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session  = require('express-session')
const { PORT, CONNECTION_STRING, SESSION_SECRET } = process.env
const authCtrl = require('./controller')

const app = express()

app.use(express.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 10
    }
}))

// Endpoints
app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)


// Database and nodemon connection
massive(CONNECTION_STRING)
    .then(db => {
        app.set('db', db)
        app.listen(PORT, () => console.log(`${PORT} panic attacks so far.`))
    })
