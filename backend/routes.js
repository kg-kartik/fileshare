const express = require('express');
const router = express.Router();

router.get('/hello',(req,res) => {
    res.status(200).json({
        name : "hello"
    })
    console.log("hello");
})
module.exports = router;