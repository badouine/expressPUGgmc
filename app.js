const express = require('express')
const app = express()
const port = 3000
const homeRouter = require('./routes/home')
const contactRouter = require('./routes/contact')
const servicesRouter = require('./routes/services')



app.use('/home', homeRouter)
app.use("/contact",contactRouter)
app.use("/services",servicesRouter)


app.set("view engine", "ejs")

app.get("/", (req, res) => {
  console.log("Home")
  res.render("home", { text: "World"})
})

app.get("/services", (req, res) => {
  res.render("services", { text: "services"})
})

app.get("/contact", (req, res) => {

  res.render("contact", { text: "contact"})
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})