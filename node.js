// Import the HTTP module
const http = require('http');

// Define the server
const server = http.createServer((req, res) => {
    // Set the response header
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Send a response based on the request URL
    if (req.url === '/') {
        res.end('Welcome to the Homepage!');
    } else if (req.url === '/about') {
        res.end('This is the About page.');
    } else {
        res.writeHead(404);
        res.end('404 Not Found');
    }
});

// Start the server and listen on port 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});