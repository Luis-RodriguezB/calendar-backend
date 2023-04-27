const { Router } = require('express');
const router = Router();

const { createUser, getUsers, revalidateToken } = require('../controllers/auth');

router.post('/new', createUser);
router.get('/', getUsers);
router.get('/renew', revalidateToken);

module.exports = router;
