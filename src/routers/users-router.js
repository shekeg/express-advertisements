const express = require('express');
const { usersController } = require('../controllers');

const usersRouter = express.Router();

usersRouter.get('/:email', usersController.getUserByEmail);
usersRouter.post('/', usersController.addUser);

exports.usersRouter = usersRouter;
