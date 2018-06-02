const express = require('express');

const router = new express.Router();

// const User = mongoose.model('User');
// const Trade = mongoose.model('Trade');

router.get('/hello', (req, res) => {
  res.json({ sup: 'd-o-double-G' });
});

module.exports = router;
