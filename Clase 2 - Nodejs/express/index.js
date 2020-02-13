const express = require('express');
const app = express();

app.use(express.json());

var port = process.env.port || 3000;


var data = [
    {
        name:'Serie 1',
        year:2018,
        company: 'BMW'
    },
    {
        name:'V8',
        year:2019,
        company:'Audi'
    },
    {
        name:'GTC4Lusso',
        year:2020,
        company: 'Ferrari'
    },
    {
        name:'RX-8',
        year:2016,
        company:'Mazda'
    },
    {
        name:'500X 2019',
        year:2019,
        company:'Fiat'
    }
];

app.get('/', (req, res) => {
    res.send('Hello world from express');
});

app.get('/api/cars', (req, res) => {
    res.send(data);
});

app.get('/api/cars/list', (req, res) => {
    var content = '<ul style="font-size: 24; list-style: none; padding:15px">';
    for(var i = 0; i < data.length; i++){
        content += `<li>id: ${i}, car: ${JSON.stringify(data[i])} </li>`
    }
    content += '</ul>';
    res.send(content);

});

app.get('/api/car/:id', (req, res) => {
    var car = data[req.params.id];
    res.send(`Car: ${car.name} year: ${car.year} company: ${car.company}`);
});

app.get('/api/cars/:company', (req, res) => {
    var car = data.find(car => car.company === req.params.company);
    if(!car){
        res.status(404).send('Not found');
    }else{
        res.send(car);
    }
    res.send(`Car: ${car}`);
});

app.post('/api/cars', (req,res) => {
    console.log(req.body);
    var car = {
        name: req.body.name,
        year: req.body.year,
        company: req.body.company
    }
    data.push(car);

    res.status(201).send(car);

});

app.listen(port, () => {
    console.log(`Listen on ${port} port`);
});