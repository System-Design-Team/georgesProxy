const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 9000;


app.use(cors());
app.use(express.static('public'));
app.use(express.static('server'));




app.listen(PORT, () => {
    console.log(`proxy is live on ${PORT}`)
})