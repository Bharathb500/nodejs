const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000


app.use(express.json());
app.use(cors());

app.post('/student-details',(req, res) => {
    console.log('from server', req.body, req.statusCode)
    req.body.name = req.body.name.split('').reverse().join('');
    res.json(req.body)
})

app.listen(port, ()=> {
    console.log('server running at port',port)
})