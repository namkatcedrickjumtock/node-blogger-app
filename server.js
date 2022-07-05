const http = require("http");
const _ = require("lodash")
const server = http.createServer((req, res) => {});

server.listen(3000, "localhost", () =>
  console.log("running we server at port 3000")
);
