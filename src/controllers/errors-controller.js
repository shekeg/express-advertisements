function notFoundHandler(req, res) {
  res.status(404);

  res.json({
    status: 'error',
    error: 'Not found',
  });
}

function unexpectedErrorHandler(err, req, res, next) {
  res.status(500);

  res.json({
    status: 'error',
    error: err.message,
  });
  next();
}

exports.errorsController = {
  notFoundHandler,
  unexpectedErrorHandler,
};
