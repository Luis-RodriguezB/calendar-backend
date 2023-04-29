const { Router } = require('express');
const { validateJWT } = require('../middlewares/validateJWT');
const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events');
const { createEventValidator, updateEventValidator } = require('../validations/event-validators');

const router = Router();

router.use(validateJWT);

router.get('/', getEvents);
router.post('/', createEventValidator, createEvent);
router.put('/:id', updateEventValidator, updateEvent);
router.delete('/:id', deleteEvent);

module.exports = router;