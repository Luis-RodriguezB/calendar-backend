const { Router } = require('express');
const { validateJWT } = require('../middlewares/validateJWT');
const router = Router();

const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events');

router.use(validateJWT);

router.get('/', getEvents);
router.post('/', createEvent);
router.put('/:id', updateEvent);
router.delete('/:id', deleteEvent);

module.exports = router;