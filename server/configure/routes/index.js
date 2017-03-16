const router = require('express').Router();

router.use('/league', require('./league'));
// router.use('/team', require('./team'));
// router.use('/nba/teams', require('./nba-teams'));

router.use(function (req, res, next) {
    var err = new Error('Not found.');
    err.status = 404;
    next(err);
});

module.exports = router;

