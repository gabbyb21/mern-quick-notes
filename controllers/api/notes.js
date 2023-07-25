module.exports = {
  create
};

function create(req, res) {
  res.json({
    note: {
      text: req.body.text
    }
  });
}