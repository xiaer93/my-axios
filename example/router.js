const express = require('express')
const router = express.Router()

// 使用绝对路劲？
router.get('/simple/get', (req, res) => {
  console.log(req)
  res.json({msg: 'ok'})
})

module.exports = router