
// const express = require('express');
// const router = express.Router();
// const Event = require('../Models/events.model.js')

// // Create Event
// router.post('/', async (req, res) => {
//   try {
//     const event = new Event(req.body);
//     await event.save();
//     res.status(201).json(event);
//   } catch (error) {
//     res.status(500).json({ error: 'Error creating event' });
//   }
// });

// // Get all Events
// router.get('/', async (req, res) => {
//   try {
//     const events = await Event.find();
//     res.status(200).json(events);
//   } catch (error) {
//     res.status(500).json({ error: 'Error fetching events' });
//   }
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
const Event = require('../Models/events.model.js');

router.post('/', async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save();
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ error: 'Error creating event' });
  }
});

// @route   GET /events
// @desc    Get all events
router.get('/', async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching events' });
  }
});

module.exports = router;
