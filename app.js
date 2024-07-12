const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.send('I eat banabas!')
})
app.post("/",(req,res)=>{
    res.send("EEE");
})

module.exports = app;