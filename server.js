const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false, }));
app.use(express.static('resources'));

app.get('/', (req, res) => {
    res.send(`<h1 style='font-size: 100px;'>HI THERE</h1>`);
});

app.get('/funky', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});

app.listen(3000, () => console.log(`Server started on 3000`));
