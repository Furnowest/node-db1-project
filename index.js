const server = require("./api/server.js");
const express = require("express")
const port = process.env.PORT || 4000;



server.listen(port, () => {
  // console.log(`\n== API running on port ${PORT} ==\n`);
  console.log(`Server running at http://localhost:${port}`)
});
