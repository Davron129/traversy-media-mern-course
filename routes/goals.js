const express = require('express')
const router = express.Router()
const { 
    GET,
    POST,
    PUT,
    DELETE
} = require('../controlers/goals')

router.get('/', GET)

router.post('/', POST)

router.put('/:id', PUT)

router.delete('/:id', DELETE)

module.exports = router