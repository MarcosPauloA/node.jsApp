const express = require('express');
const router = express.Router();
const cache = require('../configs/cache.js');
/* Post logout listing. */
router.post('/', function(req, res, next) {
    cache.del('token');
    res.end();
});
module.exports = router;
