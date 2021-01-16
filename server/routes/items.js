const express = require("express");
const router = express.Router();
const axios = require("axios");
const parseData = require("../utils/ParseData")

const API_URL = process.env.API;


//@route    GET /api/items?q=​:query
//@desc     Get items from API
//@access   Public
router.get('/', async (req, res) => {
    
    const queryItem = req.query["q"];

    if (queryItem !== undefined && queryItem !== "") {
      try {
        const responseItem = await axios.get(API_URL + "/sites/MLA/search", {
          params: { q: encodeURI(queryItem) },
        });
  
        parseData(res, responseItem.data, "search");
      } catch (error) {
        console.error(error);
        parseData(res, { API: "Item not found" });
      }
    } else return parseData(res, { API: "Query Item not found" });
  });
  

//@route    GET /api/items:id
//@desc     Get single item from API
//@access   Public





module.exports = router;