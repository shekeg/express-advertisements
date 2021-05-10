function makeUser({
  id = null,
  email = '',
  password = '',
  name = '',
  contactPhone = '',
}) {
  return {
    id,
    email,
    password,
    name,
    contactPhone,
  };
}

exports.makeUser = makeUser;
