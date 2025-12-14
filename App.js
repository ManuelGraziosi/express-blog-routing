import express from "express";
import postRouter from "./routers/posts.js"

const app = express();
const port = 3000;


app.use(express.static("public"));

app.get("/", (req, resp) => {
    resp.send("<h1>Server del mio blog</h1>")
})

app.use("/posts", postRouter);

app.listen(port, () =>{
console.log(`Servizio in ascolto sulla porta ${port}`)
})