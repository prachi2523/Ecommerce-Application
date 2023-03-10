const routes = require('./routers/commonRoute')
const bodyparser = require('body-parser')
const express = require('express')
const dotenv = require('dotenv');

require('./model/config')
const app = express()
dotenv.config()

app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(routes)

const server = app.listen(7000, () => {
    console.log(`server is listening on port:${process.env.PORT}`);
})