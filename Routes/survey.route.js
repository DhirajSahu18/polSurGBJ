
// const express = require('express');
// const router = express.Router();
// const Survey = require('../Models/surveys.model.js')

// // Create Survey
// router.post('/', async (req, res) => {
//   try {
//     const survey = new Survey(req.body);
//     await survey.save();
//     res.status(201).json(survey);
//   } catch (error) {
//     res.status(500).json({ error: 'Error creating survey' });
//   }
// });

// // Get all Surveys
// router.get('/', async (req, res) => {
//   try {
//     const surveys = await Survey.find();
//     if(!!surveys) {
//       return res.status(404).json({ error: 'No surveys found' });
//     }
//     res.status(200).json(surveys);
//   } catch (error) {
//     res.status(500).json({ error: 'Error fetching surveys' });
//   }
// });

// // Submit Survey Response
// router.post('/:surveyId/questions/:questionId/responses', async (req, res) => {
//   try {
//     const survey = await Survey.findById(req.params.surveyId);
//     survey.questions.id(req.params.questionId).responses.push(req.body.response);
//     await survey.save();
//     res.status(200).json(survey);

//   } catch (error) {
//     res.status(500).json({ error: 'Error submitting response' });
//   }
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
const Survey = require('../Models/surveys.model.js');

// @route   POST /surveys
// @desc    Create a new survey
// @body    {
//           "title": "Survey title",
//           "questions": [
//             { "question": "Your question", "type": "radio/checkbox/rating/text", "options": ["Option 1", "Option 2"] }
//           ]
//          }
router.post('/', async (req, res) => {
  try {
    const survey = new Survey(req.body);
    await survey.save();
    res.status(201).json(survey);
  } catch (error) {
    res.status(500).json({ error: 'Error creating survey' });
  }
});

// @route   GET /surveys
// @desc    Get all surveys
router.get('/', async (req, res) => {
  try {
    const surveys = await Survey.find();
    res.status(200).json(surveys);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching surveys' });
  }
});

// @route   PUT /surveys/:surveyId/question/:questionId/response
// @desc    Submit response to a survey question
// @body    { "response": "User's response" }
router.put('/:surveyId/question/:questionId/response', async (req, res) => {
  try {
    const survey = await Survey.findById(req.params.surveyId);
    const question = survey.questions.id(req.params.questionId);
    question.responses.push(req.body.response);
    await survey.save();
    res.status(200).json(survey);
  } catch (error) {
    res.status(500).json({ error: 'Error submitting response' });
  }
});

module.exports = router;
