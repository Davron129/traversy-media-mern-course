const express = require('express')
const dotenv = require('dotenv')
const { application_name } = require('pg/lib/defaults')
const port = process.env.PORT || 8000
const { errorHandler }  = require('./middlewares/error')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', require('./routes/goals'))

app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})