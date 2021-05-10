const express = require('express');
const { usersController } = require('../controllers');

const usersRouter = express.Router();

usersRouter.get('/:email', usersController.getUserByEmail);
usersRouter.post('/', usersController.addUser);
usersRouter.post('/signin', usersController.signin);

exports.usersRouter = usersRouter;
