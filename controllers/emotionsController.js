const Emotion = require("./../models/emotionsModel");

exports.getAllEmotions = async (req, res) => {
  try {
    const emotions = await Emotion.find();

    res.status(200).json({
      results: emotions.length,
      emotions,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getEmotion = async (req, res) => {
  const emotionName = req.params.emotion;

  try {
    const emotion = await Emotion.find({ emotion: emotionName });

    res.status(200).json({
      emotion,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
