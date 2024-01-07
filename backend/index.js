const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
//Cors is a package that helps us enable cross-origin requests with various options
const app = express();
const PORT = 3000;
app.use(cors());
app.use(bodyParser.json());
var messages = [
    "hello",
    "hi",
    "greeting!"
];
app.get('/messages', (req, res) => {
    
    res.send(messages);
});
app.post('/messages', (req, res) => {
    let msg = req.body;
    console.log(msg);
    messages.push(msg.message);
    res.json(msg);
    console.log(messages);
});
app.listen(PORT, () => {
    console.log('listening...');
});