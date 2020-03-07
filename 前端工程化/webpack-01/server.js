const express = require('express')

let app = express()


app.get('/api/info', (req, res) => {
    res.json({
        name: "lily",
        age: 5,
        msg: "my name is lily..."
    })
})

app.listen(3000)