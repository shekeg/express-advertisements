const { usersActions } = require('../actions/users');

async function getUserByEmail(req, res, next) {
  try {
    const user = await usersActions.getUserByEmail({ email: req.params.email });
    res.json({
      status: 'ok',
      user,
    });
  } catch (err) {
    next(err);
  }
}

async function addUser(req, res, next) {
  try {
    const user = await usersActions.addUser({ ...req.body });
    res.json({
      status: 'ok',
      user,
    });
  } catch (err) {
    next(err);
  }
}

async function signin(req, res, next) {
  try {
    const { email, password } = req.body;
    const isValidUser = await usersActions.signin({ email, password });
    res.json({
      status: 'ok',
      isValidUser,
    });
  } catch (err) {
    next(err);
  }
}

const usersController = {
  getUserByEmail,
  addUser,
  signin,
};

exports.usersController = usersController;
