exports.hasToken = (req, res, next) => {
  const { accesskey } = req.headers;

  if (accesskey !== '2jXxOvxTsn') return res.sendStatus(403);

  next();
};
