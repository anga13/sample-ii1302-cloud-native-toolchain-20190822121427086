const express = require('express')
const pino = require('express-pino-logger')()
const app = express()

const controller = require('./controller')

app.set('view engine', 'pug')
app.use(pino)

app.get('/', (req, res) => {
    res.render('index')
})
    .get('/stats/:id', (req, res) => {
        controller.getStats(req.params.id).then(employee => {
            res.render('stats', {employee})
        })
    })
    .get('/today', (req, res) => {
        controller.today().then(employees =>{
            res.render('today', {employees})
        })
    })
    .get('/hours', (req, res) => {
        res.render('hours')
    })

module.exports = app

