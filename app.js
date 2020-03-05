import express from "express"
import routes from "./routes/routes"
import dotenv from "dotenv"
import cors from "cors"

const app = express()
dotenv.config()

const port = process.env.PORT || 8000

app.use(cors())
app.use(express.json({ extended: true }))
app.use("", routes)

app.listen(port, () => {
  console.log(`app running on ${port}`)
})
