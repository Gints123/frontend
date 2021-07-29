const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 8080;

app.use(cors());
app.use(bodyParser.json());

app.all('*', (req, res) => {
    console.log('------------------');
    console.log('URL: %o, Method: %o', req.url, req.method);
    console.log('body %o', req.body);
    console.log('------------------');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});