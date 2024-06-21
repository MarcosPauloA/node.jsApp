const express = require('express');
const router = express.Router();
/* Post logout listing. */
router.post('/', function(req, res, next) {
    res.end();
});
module.exports = router;
