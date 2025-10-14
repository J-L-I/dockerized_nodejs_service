require('dotenv').config();

const express = require('express');
const basicAuth = require('express-basic-auth');
const app = express();
const port = process.env.PORT;


app.use('/secret', basicAuth({
    users: { [process.env.USERNAME]: process.env.PASSWORD},
    challenge: true,
    unauthorizedResponse: () => "Incorrect Credentials!"
}));

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/secret', (req, res) => {
    res.send(process.env.SECRET_MESSAGE)
})

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})