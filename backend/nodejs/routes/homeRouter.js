const express = require("express");
const router = express.Router();

//homepage
router.get('', (req, res) => {
    //res.send('Hello World!');
    res.json({
        name: "Store"
    });
});

module.exports = router;