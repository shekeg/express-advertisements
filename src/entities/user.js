function buildMakeUser({ passwordUtils }) {
  return function makeUser({
    id = null,
    email = '',
    password = '',
    name = '',
    contactPhone = '',
  }) {
    if (email === '') {
      throw new Error('поле email обязатьельно для заполнения');
    }
    if (password === '') {
      throw new Error('поле password обязатьельно для заполнения');
    }
    if (name === '') {
      throw new Error('поле name обязатьельно для заполнения');
    }

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
