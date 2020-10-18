const express = require("express");
const accountrouter = require("../data/router/account-router")


const server = express();

server.use(express.json());

server.use("/accounts", accountrouter)

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})




module.exports = server;
