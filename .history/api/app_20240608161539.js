import exp from "constants"
import express from "express"
import authRoute from "./routes/auth.route.js"
const app = express();


app.use("/api/posts",postRoute)
app.use("/api/auth",authRoute)
console.log("test")
app.listen(8800,()=> {
     console.log("server is running")
})