const http = require('http');
/*
const server = http.createServer();

server.on('connection', (socket) => {
    console.log('New connection established');
})

server.listen(2020);
console.log('listen on 2020 port');*/
/*
const server = http.createServer((req, res) =>{
    if(req.url === '/'){
        res.write('Hello World');
        res.write('from Nodejs');
        res.end();
    }else{
        res.write('forbidden 401');
        res.end()
    }
}).listen(2020);

console.log('Listen on 2020');
*/



const server = http.createServer((req, res) =>{
    res.writeHead(200, {'Content-type':'text/html'});

    res.write('<h1>200 Successful</h1>');
    res.end();

}).listen(2020);
console.log('listen on 2020');