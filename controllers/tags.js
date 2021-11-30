const Question = require("../models/question");

exports.listPopulerTags = async (req, res, next) => {
  try {
    const tags = await Question.aggregate([
      { $project: { tags: 1 } },
      { $unwind: "$tags" },
      { $group: { _id: "$tags", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 25 },
    ]);
    return res.status(200).json({ tags });
  } catch (error) {
    next(error);
  }
};

exports.listTags = async (req, res, next) => {
  try {
    const tags = await Question.aggregate([
      { $project: { tags: 1 } },
      { $unwind: "$tags" },
      { $group: { _id: "$tags", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
    ]);
    return res.status(200).json({ tags });
  } catch (error) {
    next(error);
  }
};

exports.searchTags = async (req, res, next) => {
  const { tag = "" } = req.params;
  try {
    const questions = await Question.find({
      tags: { $regex: tag, $options: "i" },
    });

    return res.status(200).json({ questions });
  } catch (error) {
    next(error);
  }
};
