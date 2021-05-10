const { usersActions } = require('../actions');

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

const usersController = {
  getUserByEmail,
  addUser,
};

exports.usersController = usersController;
