const express = require('express');
const app = express();
app.get('/', (req, res) => res.json({ message: 'This is the sample node app', version: process.env.APP_VERSION }))
app.listen(3000, () => console.log('Listening on 3000'));