const { GeneralError } = require('../utils/errors');

function notFoundHandler(req, res) {
  res.status(404);

  res.json({
    status: 'error',
    error: 'Not found',
  });
}

function unexpectedErrorHandler(err, req, res, next) {
  if (err instanceof GeneralError) {
    res.status(err.getCode()).json({
      status: 'error',
      error: err.message,
    });
  } else {
    res.status(500).json({
      status: 'error',
      message: err.message,
    });
  }

  next();
}

exports.errorsController = {
  notFoundHandler,
  unexpectedErrorHandler,
};
