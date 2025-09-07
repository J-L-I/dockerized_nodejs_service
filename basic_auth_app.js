const express = require('express')
const app = express()
const port = 3000

app.get('/secret', (req, res) => {
    const user = basicAuth(req);
    if (!user || user.name != `${process.env.USERNAME}` || user.pass != `${process.env.PASSWORD}`) {
        res.status(401).send('Authentication Required');
        return;
    } else {
        res.send(`${SECRET_MESSAGE}`)
    }
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`app listening on ${port}`)
})