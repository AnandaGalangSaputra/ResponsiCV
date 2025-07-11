const http = require("http");
const { educationHistory, skills, projects } = require("./data");

const PORT = 3000;

const server = http.createServer((req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Set content type to JSON
  res.setHeader('Content-Type', 'application/json');

  // Handle routes
  if (req.url === '/') {
    res.writeHead(200);
    res.end('Backend API is running...');
  }
  else if (req.url === '/api/education') {
    res.writeHead(200);
    res.end(JSON.stringify(educationHistory));
  }
  else if (req.url === '/api/skills') {
    res.writeHead(200);
    res.end(JSON.stringify(skills));
  }
  else if (req.url === '/api/projects') {
    res.writeHead(200);
    res.end(JSON.stringify(projects));
  }
  else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: 'Not found' }));
  }
});

server.listen(PORT, () => {
  console.log(`Server backend berjalan di http://localhost:${PORT}`);
});
