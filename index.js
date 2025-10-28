require('dotenv').config()
const express =require('express')
const app =express()

const PORT =process.env.PORT
app.use(express.json())

app.get("/",(req,res)=>{
    res.send(`.env 테스트:${process.env.DATABASE_NAME}`)
})
app.get("/api/health", (req, res) => {
          res.json({ ok: true, time: new Date().toISOString() });
});


app.listen(PORT,()=>{
    console.log(`Sever is running! : ${PORT} app-`)
})