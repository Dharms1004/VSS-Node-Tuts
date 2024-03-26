module.exports.handleGetTodos = (req, res) => {
    const { user } = req.query;
    return res.send({ message: `Welcome ${user} to team` });
  };