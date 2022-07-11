const express = require("express")
const Order = require("../models/order")
const router = express.Router()

router.get("/", (req, res) => {
   Order.listOrdersForUser()
})

router.post("/", (req,res) => {
    Order.createOrder()
})


module.exports = router