const express = require("express")
const Store = require("../models/store")
const router = express.Router()



//get requrest at / endpoint that calls store.listproducts

router.post("/", async (req, res, next) => {
  try {
   //list all products 
  } catch (err) {
    next(err)
  }
})



module.exports = router