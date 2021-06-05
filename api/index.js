module.exports = (req, res) => {
  const { name = 'realwds' } = req.query
  res.send(`Hello ${name}!`)
}
