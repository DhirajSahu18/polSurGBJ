const mongoose = require('mongoose');

const surveySchema = new mongoose.Schema({
  title: { type: String, required: true },
  questions: [
    {
      question: { type: String, required: true },
      type: { type: String, enum: ['radio', 'checkbox', 'rating', 'text'], required: true },
      options: [{ type: String }], // For radio, checkbox questions
      responses: [{ type: mongoose.Schema.Types.Mixed }]
    }
  ],
  createdBy: { type: String, default: 'Anonymous' },
  createdAt: { type: Date, default: Date.now }
});

const Survey = mongoose.model('Survey', surveySchema);
module.exports = Survey;
