// const express = require('express')
// const router = express.Router()
// const Donation = require('../Models/donations.model.js')

// // Create Donation
// router.post('/', async (req, res) => {
//   try {
//     const donation = new Donation(req.body)
//     await donation.save()
//     res.status(201).json(donation)
//   } catch (error) {
//     res.status(500).json({ error: 'Error creating donation' })
//   }
// })

// // Get all Donations
// router.get('/', async (req, res) => {
//   try {
//     const donations = await Donation.find()
//     res.status(200).json(donations)
//   } catch (error) {
//     res.status(500).json({ error: 'Error fetching donations' })
//   }
// })

// module.exports = router


const express = require('express');
const router = express.Router();
const Donation = require('../models/Donation');

// @route   POST /donations
// @desc    Create a new donation
// @body    {
//           "amount": 1000,
//           "name": "John Doe",
//           "email": "john@example.com",
//           "phone": "1234567890",
//           "note": "Donation note"
//          }
router.post('/', async (req, res) => {
  try {
    const donation = new Donation(req.body);
    await donation.save();
    res.status(201).json(donation);
  } catch (error) {
    res.status(500).json({ error: 'Error creating donation' });
  }
});

// @route   GET /donations
// @desc    Get all donations
router.get('/', async (req, res) => {
  try {
    const donations = await Donation.find();
    res.status(200).json(donations);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching donations' });
  }
});

module.exports = router;
