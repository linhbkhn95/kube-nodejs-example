const express = require('express')
const app = express()
const port = 3000

let time = Date.now()
app.get('/', (req, res) => {
    console.log(
        'time ----',time
    )
    res.send('Hello World!')
})
    


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))