const { response } = require('express');

const createUser = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'registro',
  });
};

const getUsers = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'login',
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
  getUsers,
  revalidateToken
};
