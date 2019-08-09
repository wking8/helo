require('dotenv').config()
const express = require('express')
const massive = require('massive')
const { PORT, CONNECTION_STRING, SESSION_SECRET } = process.env

const app = express()

app.use(express.json())

app.listen(PORT, () => console.log(`${PORT} panic attacks so far.`))
