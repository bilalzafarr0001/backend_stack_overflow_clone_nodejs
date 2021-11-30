exports.upvote = async (req, res) => {
  const { id } = req.user;

  if (req.answer) {
    req.answer.vote(id, 1);
    const question = await req.question.save();
    return res.status(201).json({ question });
  }
  const question = await req.question.vote(id, 1);
  return res.status(201).json({ question });
};

exports.downvote = async (req, res) => {
  const { id } = req.user;

  if (req.answer) {
    req.answer.vote(id, -1);
    const question = await req.question.save();
    return res.status(201).json({ question });
  }
  const question = await req.question.vote(id, -1);
  return res.status(201).json({ question });
};

exports.unvote = async (req, res) => {
  const { id } = req.user;

  if (req.answer) {
    req.answer.vote(id, 0);
    const question = await req.question.save();
    return res.status(201).json({ question });
  }
  const question = await req.question.vote(id, 0);
  return res.status(201).json({ question });
};
