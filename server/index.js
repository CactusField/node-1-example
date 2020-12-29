const express = require('express')
const ctrlr = require('./controller')
const app = express()


//req =info about reqest
//res=info about your response you send back

//ALWAYS (req, res)


app.get("/test", (req, res)=>{
    res.send('is this what you are looking for')
})


app.get('/weewoo',(req, res)=>{
    res.send('homie')
})
app.get('/reject',(req, res)=>{
    res.status(400).send('no no no NO!')
})

app.get('/api/users', ctrlr.getAllUsers)
app.get('/api/user/:id', ctrlr.getSingleUser)


app.listen(3456, ()=> console.log('Listening on Port 3456'))