const express = require('express')
const app  = express()

const moviesRoute = require('./moviesRoute')
const categoriesRoute = require('./categoriesRoute')
const scheduleRoute = require('./scheduleRoute')
const locationRoute = require('./locationRoute')
const cinemaRoute = require('./cinemaRoute')
const bookingRoute = require('./bookingRoute')
const usersRoute = require('./usersRoute')
const paymentRoute = require('./paymentRoute')
const paymentMethodRoute = require('./paymentMethodRoute')
const authRoute = require('./authRoute')

app.use('/movies', moviesRoute)
app.use('/categories', categoriesRoute)
app.use('/schedule', scheduleRoute)
app.use('/location', locationRoute)
app.use('/cinema', cinemaRoute)
app.use('/booking', bookingRoute)
app.use('/users', usersRoute)
app.use('/payment', paymentRoute)
app.use('/paymentMethod', paymentMethodRoute)
app.use('/auth', authRoute)


module.exports = app