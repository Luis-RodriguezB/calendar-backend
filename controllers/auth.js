const { response } = require('express');
const { validationResult } = require('express-validator');

const createUser = (req, res = response) => {
  const { name, email, password } = req.body;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped(),
    });
  }

  res.json({
    ok: true,
    msg: 'registro',
    name,
    email,
    password,
  });
};

const login = (req, res = response) => {
  const { email, password } = req.body;
  console.log(req)
  const errors = validationResult(req);
  console.log(errors)

  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped(),
    });
  }

  res.json({
    ok: true,
    msg: 'login',
    email,
    password,
  });
};

const revalidateToken = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'User updated',
  });
};

module.exports = {
  createUser,
  login,
  revalidateToken,
};
