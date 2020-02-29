const express = require('express');
const PORT = process.env.PORT;
var path = require('path');

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(PORT, () => {
    console.log('Listening to port '+PORT)
})