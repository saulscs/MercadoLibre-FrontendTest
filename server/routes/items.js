const express = require("express")
const router = express.Router();
const axios = require("axios");

//@route GET /api/items?q=​:query
//@access Public
router.get('/',(req,res) => res.send("User route"));



module.exports = router;