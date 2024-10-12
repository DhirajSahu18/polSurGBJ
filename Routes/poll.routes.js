// const express = require('express')
// const router = express.Router()
// const Poll = require('../Models/polls.model.js')

// // Create Poll
// router.post('/', async (req, res) => {
//   try {
//     const poll = new Poll(req.body)
//     await poll.save()
//     res.status(201).json(poll)
//   } catch (error) {
//     res.status(500).json({ error: 'Error creating poll' })
//   }
// })

// // Get all Polls
// router.get('/', async (req, res) => {
//   try {
//     const polls = await Poll.find()
//     res.status(200).json(polls)
//   } catch (error) {
//     res.status(500).json({ error: 'Error fetching polls' })
//   }
// })

// // Vote in Poll
// router.put('/:pollId/vote/:optionId', async (req, res) => {
//   try {
//     const poll = await Poll.findById(req.params.pollId)
//     if (!poll) {
//       return res.status(404).json({ error: 'Poll not found' })
//     }
//     const option = poll.options.id(req.params.optionId)
//     if (!option) {
//       return res.status(404).json({ error: 'Option not found' })
//     }
//     option.votes += 1
//     await poll.save()
//     res.status(200).json(poll)
//   } catch (error) {
//     res.status(500).json({ error: 'Error voting in poll' })
//   }
// })

// module.exports = router

const express = require('express');
const router = express.Router();
const Poll = require('../Models/polls.model.js');

// @route   POST /polls
// @desc    Create a new poll
// @body    {
//           "question": "Your poll question",
//           "options": [{"option": "Option 1"}, {"option": "Option 2"}]
//          }
router.post('/', async (req, res) => {
  try {
    const poll = new Poll(req.body);
    await poll.save();
    res.status(201).json(poll);
  } catch (error) {
    res.status(500).json({ error: 'Error creating poll' });
  }
});

// @route   GET /polls
// @desc    Get all polls
router.get('/', async (req, res) => {
  try {
    const polls = await Poll.find();
    res.status(200).json(polls);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching polls' });
  }
});

// @route   PUT /polls/:pollId/vote/:optionId
// @desc    Vote on a poll option
// @body    No body required, params include pollId and optionId
router.put('/:pollId/vote/:optionId', async (req, res) => {
  try {
    const poll = await Poll.findById(req.params.pollId);
    const option = poll.options.id(req.params.optionId);
    option.votes += 1;
    await poll.save();
    res.status(200).json(poll);
  } catch (error) {
    res.status(500).json({ error: 'Error voting in poll' });
  }
});

module.exports = router;
