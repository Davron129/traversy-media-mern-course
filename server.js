const express = require('express')
const dotenv = require('dotenv')
const port = process.env.PORT || 8000
const { errorHandler }  = require('./middlewares/error')
const userController = require('./controlers/user.controller')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', require('./routes/goals'))
app.use('/api/users', require('./routes/user.router'))

app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

// https://youtu.be/-0exw-9YJBo?t=2332