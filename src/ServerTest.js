import * as http from "http";

export function startServer() {
  const server = http.createServer((req, res) => {
    if (req.url === "/api/data") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Hello from API" }));
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not Found");
    }
  });

  server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
  });
}
