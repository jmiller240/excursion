const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false, }));

app.get('/', (req, res) => {
    res.send('Hi there');
});

app.get('/funky', (req, res) => {
    res.sendFile('./index.html');
});

app.listen(3000, () => console.log(`Server started on 3000`));
