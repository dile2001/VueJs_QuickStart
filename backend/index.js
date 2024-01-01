const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;
app.use(cors());
app.get('/messages', (req, res) => {
    const  messages = [
        "he",
        "hi",
        "greeting!"
    ]
    res.send(messages);
})
app.listen(PORT, () => {
    console.log('listening...');
});