const errorHandler = (err, req, res, next) => {
  const message =
    err.response?.data.message || err.message || "Internal server error";
  const status = err.response?.status || err.status || 500;
  console.error(`status: ${status}, error: ${message}`);
  res.status(status).json({ error: message });
  next();
};

export default error;
