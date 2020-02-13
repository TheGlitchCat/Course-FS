const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello world from express');
});

app.get('/api/cars', (req, res) =>{
    res.send(['BMW','Audi','Ferrari','Mazda','Fiat']);
});


app.listen(2020);