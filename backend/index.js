const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
//Cors is a package that helps us enable cross-origin requests with various options
const app = express();
const PORT = 3000;
app.use(cors());
app.use(bodyParser.json());
app.get('/messages', (req, res) => {
    const  messages = [
        "hello",
        "hi",
        "greeting!"
    ]
    res.send(messages);
});
app.post('/messages', (req, res) => {
    console.log(req.body);
    res.end();
});
app.listen(PORT, () => {
    console.log('listening...');
});