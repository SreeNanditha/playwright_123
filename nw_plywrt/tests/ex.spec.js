const express = require('express');
const app = express();
const port = 3000; 
app.get('/sayHello', (req, res) => {
    res.send('hello');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});