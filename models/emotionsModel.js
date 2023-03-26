const mongoose = require("mongoose");

const emotionSchema = new mongoose.Schema({
  emotion: {
    type: String,
    required: [true, "An emotion must have a name"],
    unique: true,
  },
  mainText: {
    type: [String],
    required: [true, "Emotions must have a summary"],
  },
  techniques: {
    type: [String],
    required: [true, "Emotions must have a list of coping techniques"],
  },
});

const Emotion = mongoose.model("Emotion", emotionSchema);
module.exports = Emotion;
