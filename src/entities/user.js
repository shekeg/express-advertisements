function buildMakeUser({ passwordUtils }) {
  return function makeUser({
    id = null,
    email = '',
    password = '',
    name = '',
    contactPhone = '',
  }) {
    return {
      id,
      email,
      passwordHash: passwordUtils.genPasswordHash(password),
      name,
      contactPhone,
    };
  };
}

exports.buildMakeUser = buildMakeUser;
