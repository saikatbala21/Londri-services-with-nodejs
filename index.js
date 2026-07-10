const http = require('http');  // Used to create the HTTP server
const fs = require('fs');      // Used to read files from the file system   
const port = 3000;             // Used to read files from the file system

function serveFile(path, type, res) {
  fs.readFile(path, 'utf8', (err, data) => {       // Read the file asynchronously using UTF-8 encoding
    if (err) {
      console.error(`500 Error reading ${path}:`, err.message);
      res.writeHead(500, { 'Content-Type': 'text/html' });
      res.end('<h1>500 Internal Server Error</h1>');
    } else {
      res.writeHead(200, { 'Content-Type': type });
      res.end(data);
    }
  });
}

// Map of requested URLs (routes) to their corresponding local files and  type
const routes = {
  '/': { path: './index.html', type: 'text/html' },
  '/home': { path: './index.html', type: 'text/html' },
  '/styles.css': { path: './styles.css', type: 'text/css' },
  '/content.js': { path: './content.js', type: 'text/javascript' },
  '/email.js': { path: './email.js', type: 'text/javascript' },
  '/contact': { path: './contact.html', type: 'text/html' },
  '/contact.html': { path: './contact.html', type: 'text/html' },
  '/contact.css': { path: './contact.css', type: 'text/css' },
  '/about': { path: './about.html', type: 'text/html' },
  '/about.html': { path: './about.html', type: 'text/html' },
  '/about.css': { path: './about.css', type: 'text/css' }
};
// Create the main HTTP server instance
const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
// Look up the requested URL inside our routes mapping dictionary
    const route = routes[req.url];
    if (route) {        // Route found: serve the associated file
      serveFile(route.path, route.type, res);
    } else {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1>404 Not Found</h1>');
    }
  } else {
    res.writeHead(405, { 'Content-Type': 'text/html' });
    res.end('<h1>405 Method Not Allowed</h1>');
  }
});
// Bind the server to the designated port and begin listening for requests
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});  



