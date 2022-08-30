const http = require("http");
const port = process.env.PORT || 8081;
const app = require('./src/app')

const server = http.createServer(app);

    server.listen(port)
    console.log("Rodando na porta:",port)
