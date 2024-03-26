module.exports.validateUserQueryParams = (req, res, next) => {
    const { user } = req.query;
    if (!user || user !== "bharat") {
      return res.send({ mesage: "You are not allowed to see this page Now" });
    }
  
    next();
  };