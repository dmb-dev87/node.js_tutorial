const express = require('express');

const router = express.Router();

const userController = require('../controller/user.controller.js');

router.get('/', userController.findAll);

router.post('/', userController.create);

router.get('/:id', userController.findOne);

router.put('/:id', userController.update);

router.delete('/:id', userController.delete);

module.exports = router