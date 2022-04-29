const express = require('express')
const dotenv = require('dotenv')
const { application_name } = require('pg/lib/defaults')
const port = process.env.PORT || 8000

const app = express()

app.use('/api/goals', require('./routes/goals'))

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})