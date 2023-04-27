const { Router } = require('express');
const { loginValidator, userValidator } = require('../validations/validators');
const router = Router();

const { createUser, login, revalidateToken } = require('../controllers/auth');

router.post('/new', userValidator, createUser);
router.post('/', loginValidator, login);
router.get('/renew', revalidateToken);

module.exports = router;
