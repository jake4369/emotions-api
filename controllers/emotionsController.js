const Emotion = require("./../models/emotionsModel");
const APIFeatures = require("./../utils/apiFeatures");

exports.getAllEmotions = async (req, res) => {
  try {
    const features = new APIFeatures(Emotion.find(), req.query)
      .sort()
      .paginate();

    const emotions = await features.query;

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
