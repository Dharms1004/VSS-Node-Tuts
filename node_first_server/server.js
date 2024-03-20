const http = require("node:http")
const url = require('url');
const hostname = '127.0.0.1';
const port = 3333;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    let queryParam = url.parse(req.url, true);
    let isEmptyqueryData = queryParam.query;
    let response = "";
    if(req.url == "/"){
        response  = "Welcome to CardBook.";
    }else if(req.url == "/greetings" && !isEmpty(queryData)){
        response = `Hello ${queryData.name}`;        
    }else if(req.url == "/greetings" && isEmpty(queryData)){
        response  = "Hello there?";
    }

    res.end(response);
    
});


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});