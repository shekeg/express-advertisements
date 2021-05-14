/* eslint-disable max-classes-per-file */
class GeneralError extends Error {
  constructor(message) {
    super();
    this.message = message;
  }

  getCode() {
    if (this instanceof ForbiddenError) {
      return 403;
    }
    return 500;
  }
}

class ForbiddenError extends GeneralError { }

module.exports = {
  GeneralError,
  ForbiddenError,
};
