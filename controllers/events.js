const { response } = require('express');

const getEvents = (req, res = response) => {

    res.status(200).json({
        ok: true,
        msg: 'Get Events'
    });
}

const createEvent = (req, res = response) => {

    console.log(req.body)

    res.status(201).json({
        ok: true,
        msg: 'Created Event'
    });
}

const updateEvent = (req, res = response) => {

    res.status(201).json({
        ok: true,
        msg: 'Updated Event'
    });
}

const deleteEvent = (req, res = response) => {

    res.status(200).json({
        ok: true,
        msg: 'Delete Event'
    });
}

module.exports = {
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent
}