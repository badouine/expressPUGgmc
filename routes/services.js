const express = require("express")
const router = express.Router()

router.get("/services", (req, res) => {
    res.send("Our Services")
})

module.exports = router