const http = require('http');
const fs = require('fs');
const port = 3000;
function loadFile(path) {
  try {
    return fs.readFileSync(path, 'utf8');
  } catch (err) {
    console.error(`500 Error reading this file ${path}:`, err.message);
    return null;
  }
}
const files = {
  '/': { content: loadFile('./index.html'), type: 'text/html' },
  '/home': { content: loadFile('./index.html'), type: 'text/html' },
  '/styles.css': { content: loadFile('./styles.css'), type: 'text/css' },
  '/content.js': { content: loadFile('./content.js'), type: 'text/javascript' },
  '/email.js': { content: loadFile('./email.js'), type: 'text/javascript' },
  '/contact': { content: loadFile('./contact.html'), type: 'text/html' },
  '/contact.html': { content: loadFile('./contact.html'), type: 'text/html' },
  '/contact.css': { content: loadFile('./contact.css'), type: 'text/css' },
  '/about': { content: loadFile('./about.html'), type: 'text/html' },
  '/about.html': { content: loadFile('./about.html'), type: 'text/html' },
  '/about.css': { content: loadFile('./about.css'), type: 'text/css' }
};

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    const file = files[req.url];

    if (file && file.content) {
      res.writeHead(200, { 'Content-Type': file.type });
      res.end(file.content);
    } else {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1>404 Not Found</h1>');
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>404 Not Found</h1>');
  }
});

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
