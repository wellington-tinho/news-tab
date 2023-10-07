function status(req, res) {
  res.status(200).json({
    status: "OK",
    date: new Date(),
  });
}
export default status;
