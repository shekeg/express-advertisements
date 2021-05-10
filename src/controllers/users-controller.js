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

async function signup(req, res, next) {
  try {
    const user = await usersActions.signup({ ...req.body });
    user.passwordHash = undefined;

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
    const { user } = req;
    user.passwordHash = undefined;
    res.json({
      status: 'ok',
      user,
    });
  } catch (err) {
    next(err);
  }
}

const usersController = {
  getUserByEmail,
  signup,
  signin,
};

exports.usersController = usersController;
