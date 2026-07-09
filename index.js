const http =require('http');
const port=3000;
const fs=require('fs');
const filePath=fs.readFileSync('./index.html');
const filePath1=fs.readFileSync('./styles.css');
const contents=fs.readFileSync('./content.js');
const Emails=fs.readFileSync('./email.js');
const contact=fs.readFileSync('./contact.html');
const contactcs=fs.readFileSync('./contact.css');
const about=fs.readFileSync('./about.html');
const aaboutcs=fs.readFileSync('./about.css');

const server=http.createServer((req,res)=>{
    if(req.method==='GET'){
        if(req.url==='/home' || req.url==='/'){
          res.writeHead(200,{'Content-Type':'text/html'});
          res.write(filePath);
          res.end();
        }
      
        else if(req.url==='/styles.css'){
          res.writeHead(200,{'Content-Type':'text/css'});
          res.write(filePath1);
          res.end();
        } 
        else if(req.url==='/content.js'){
         res.writeHead(200,{'Content-Type':'text/javascript'});
         res.write(contents);
         res.end();
        } 
        else if(req.url==='/email.js'){
         res.writeHead(200,{'Content-Type':'text/javascript'});
         res.write(Emails);
         res.end();
        }
        else if(req.url==='/contact'|| req.url==='/contact.html'){
          res.writeHead(200,{'Content-Type':'text/html'});
          res.write(contact);
          res.end();

        }
        else if(req.url==='/contact.css'){
          res.writeHead(200,{'Content-Type':'text/css'});
          res.write(contactcs);
          res.end();
        }
         else if(req.url==='/about'|| req.url==='/about.html'){
          res.writeHead(200,{'Content-Type':'text/html'});
          res.write(about);
          res.end();

        }
        else if(req.url==='/about.css'){
          res.writeHead(200,{'Content-Type':'text/css'});
          res.write(aaboutcs);
          res.end();
        }
        else{
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1>404 Not Found</h1>');
        }
        

    }
    else{
        res.writeHead(404,{'Content-Type':'text/html'});
        res.write('<h1>404 Not Found</h1>');
        res.end();
    }     
} ).listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
}) 