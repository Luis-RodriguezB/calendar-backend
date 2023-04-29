const { response } = require('express');
const Event = require('../models/Event');
const { RES_MESSAGE } = require('../helpers/responseMessages');

const getEvents = async (req, res = response) => {
  const events = await Event.find().populate('user', 'name');

  res.status(200).json({
    ok: true,
    msg: RES_MESSAGE.EVENT_MESSAGES.GET_EVENTS,
    events,
  });
};

const createEvent = async (req, res = response) => {
  const event = new Event(req.body);

  try {
    event.user = req.uid;

    const eventSaved = await event.save();

    res.status(201).json({
      ok: true,
      msg: RES_MESSAGE.EVENT_MESSAGES.CREATE_EVENT,
      event: eventSaved,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: RES_MESSAGE.MESSAGE_500,
    });
  }
};

const updateEvent = async (req, res = response) => {
  const eventId = req.params.id;
  const uid = req.uid;

  try {
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({
        ok: false,
        msg: RES_MESSAGE.EVENT_MESSAGES.EVENT_NOTEXIST,
      });
    }

    if (event.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: RES_MESSAGE.EVENT_MESSAGES.EVENT_401_MESSAGE,
      });
    }

    const newEvent = {
      ...req.body,
      user: uid,
    };
    const eventUpdated = await Event.findByIdAndUpdate(eventId, newEvent, {
      new: true,
    });

    res.json({
      ok: true,
      msg: RES_MESSAGE.EVENT_MESSAGES.UPDATE_EVENT,
      event: eventUpdated,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: RES_MESSAGE.MESSAGE_500,
    });
  }
};

const deleteEvent = async (req, res = response) => {
  const eventId = req.params.id;
  const uid = req.uid;

  try {
    const event = await Event.findById(eventId);

    if (!event) {
      return res.status(404).json({
        ok: false,
        msg: RES_MESSAGE.EVENT_MESSAGES.EVENT_404_MESSAGE,
      });
    }

    if (event.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: RES_MESSAGE.EVENT_MESSAGES.EVENT_401_MESSAGE,
      });
    }

    await Event.findByIdAndRemove(eventId);

    res.json({
      ok: true,
      msg: RES_MESSAGE.EVENT_MESSAGES.DELETE_EVENT,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: RES_MESSAGE.MESSAGE_500,
    });
  }
};

module.exports = {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
};
