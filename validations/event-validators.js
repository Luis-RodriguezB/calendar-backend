const { check } = require('express-validator');
const { fieldValidator } = require('../middlewares/fieldValidator');
const { isDate } = require('../helpers/isDate');

const createEventValidator = [
  check('title', 'El titulo es obligatorio').not().isEmpty(),
  check('start', 'Fecha de inicio es obligatoria').custom(isDate),
  check('end', 'Fecha de finalización es obligatoria').custom(isDate),
  fieldValidator,
];

const updateEventValidator = [
  check('title', 'El titulo es obligatorio').not().isEmpty(),
  check('start', 'Fecha de inicio es obligatoria').custom(isDate),
  check('end', 'Fecha de finalización es obligatoria').custom(isDate),
  fieldValidator,
];

module.exports = {
  createEventValidator,
  updateEventValidator
};
