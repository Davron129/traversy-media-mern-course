const express = require('express')
const router = express.Router()
const userController = require('../controlers/user.controller');

router.post('/', userController.addUser);
router.get('/', userController.getUser);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.editUserById);
router.delete('/:id', userController.deleteUser);

module.exports = router