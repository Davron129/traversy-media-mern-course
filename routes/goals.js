const express = require('express')
const router = express.Router()
const { 
    GET,
    POST,
    PUT,
    DELETE
} = require('../controlers/goals')

router
    .route('/')
    .get(GET)
    .post(POST)

router
    .route('/:id')
    .put(PUT)
    .delete(DELETE)

module.exports = router