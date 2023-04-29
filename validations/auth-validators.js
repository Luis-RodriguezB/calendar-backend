const { check } = require('express-validator');
const { fieldValidator } = require('../middlewares/fieldValidator');

const userValidator = [
  check('name', 'El nombre es obligatorio').not().isEmpty(),
  check('email', 'El email es obligatorio').isEmail(),
  check('password', 'El password debe de ser de 6 caracteres').isLength({
    min: 6,
  }),
  fieldValidator,
];

const loginValidator = [
  check('email', 'El email es obligatorio').isEmail(),
  check('password', 'El password debe de ser de 6 caracteres').isLength({
    min: 6,
  }),
  fieldValidator,
];

module.exports = {
  userValidator,
  loginValidator,
};
