const express = require("express")
const axios = require("axios")
const bodyParser = require("body-parser")
const app = express()
const cors = require("cors")
const {PORT , FRONTEND_URL} = require("./config/serverConfig")
app.use(cors({
<<<<<<< HEAD
    origin: "http://localhost:5173",
=======
    origin: FRONTEND_URL,
>>>>>>> 5024cab (Updated Backend)
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

const apiRouter = require('./route/index')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/api', apiRouter)
app.get('/', (req, res) => {
    res.send("Everything works fine for now...")
})
app.listen(PORT,()=>{
    console.log("On port : ", PORT);
})
