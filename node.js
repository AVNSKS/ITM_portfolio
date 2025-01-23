const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    if (req.url === '/') {
        res.end('Hello! You are on the Home page.');
    } else if (req.url === '/about') {
        res.end('Welcome to the About page!');
    } else {
        res.writeHead(404);
        res.end('Oops! Page not found.');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});