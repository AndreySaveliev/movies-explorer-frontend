module.exports = (err, req, res, next) => {
  if (err.statusCode) {
    res.status(err.statusCode).send({ message: err.message });
  } else {
    console.log(err)
    res.status(500).send({ message: 'Ошибка по умолчанию' });
  }
  next();
};
