const { Router } = require('express');
const { loginValidator, userValidator } = require('../validations/validators');
const { createUser, login, revalidateToken } = require('../controllers/auth');
const { validateJWT } = require('../middlewares/validateJWT');

const router = Router();

router.post('/new', userValidator, createUser);
router.post('/', loginValidator, login);
router.get('/renew', validateJWT, revalidateToken);

module.exports = router;
