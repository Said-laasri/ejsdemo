const setMessage = (req, res, next) => {
    if (req.session.pendingMessage) {
      res.locals.message = req.session.pendingMessage;
    } else {
      res.locals.message = "";
    }
    req.session.pendingMessage = "";
    next();
  };
  
  module.exports = setMessage;