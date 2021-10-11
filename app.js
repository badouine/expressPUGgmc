const express = require('express')
const app = express()
const port = 3000
const homeRoute = require("./routes/client")

app.use("/", homeRoute)
app.use("/services", homeRoute)
app.use("/contact", homeRoute)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})