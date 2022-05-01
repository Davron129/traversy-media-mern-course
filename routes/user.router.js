const express = require('express')
const router = express.Router()
const userController = require('../controlers/user.controller');

router
    .route('/')
    .get(userController.getUser)
    .post(userController.addUser)

router
    .route('/:id')
    .get(userController.getUserById)
    .put(userController.editUserById)
    .delete(userController.deleteUser)

module.exports = router