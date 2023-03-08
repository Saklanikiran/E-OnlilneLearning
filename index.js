//console.log("Hello world")
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Online learing platform| learning.com</title>
      <link rel="stylesheet" href="index.css">
  </head>
  <body>
      <nav id="navbar">
          <div id="logo">
              <img src="image/second.png" alt="learning.com">
          </div>
          <ul>
              <li class="item"><a href="/Home.html">Home</a></li>
              <li class="item"><a href="Course.html">Course</a></li>
              <li class="item"><a href=Service.html>Services</a></li>
              <li class="item"><a href="AboutUs.html">About us</a></li>
              <li class="item"><a href="contactUs.html">Contact</a></li>
          </ul>
      </nav>
      <section id="home">
          <h1 class="h-primary">Welcome to Online Learning</h1>
          <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet repudiandae voluptatem, molestiae laudantium perferendis inventore. Aut perspiciatis aliquid, ipsum doloribus repudiandae sunt dicta reprehenderit laborum commodi itaque eius laudantium eos.
          </p>
          <button class="btn">Book you class now</button>
      </section>
      
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});