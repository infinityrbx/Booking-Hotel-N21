import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  let token = req.header("Authorization");

  if (!token) {
    return res.status(403).send("No Token");
  }

  if (token.startsWith("Bearer ")) {
    token = token.slice(7, token.length).trimLeft();
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).send("Invalid Token");
    req.user = user;
    next();
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, (err) => {
    if (err) return next(err);
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return res.status(403).send("Access Denied");
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, (err) => {
    if (err) return next(err);
    if (req.user.isAdmin) {
      next();
    } else {
      return res.status(403).send("You are not authorized!");
    }
  });
};
