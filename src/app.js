const express = require('express');
const cookieParser = require('cookie-parser');
require("dotenv").config();
const PORT = process.env.PORT || 8080;

const app = express();
const router = require("./routes");

app.use(express.json())
app.use(cookieParser())
app.use(router);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});