const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.send("Home")
})

router.get("/services", (req, res) => {
    res.send("Our Services")
})

router.get("/contact", (req, res) => {
    res.send("Contact")
})

module.exports = router