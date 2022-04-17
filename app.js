const path = require("path");
const express = require("express");
const app = express();

const staticpath = path.join(__dirname, "/public");
app.use(express.static(staticpath));

app.get("/", (req, res, next) => {
	var name = "hello";
	res.sendFile(__dirname + "/index.html", { name: name });
});

app.get("/form", async (req, res, next) => {
	const alicepublic = req.query.alicepublic;
	const aliceprivate = req.query.aliceprivate;
	const bobpublic = req.query.bobpublic;
	console.log(alicepublic, aliceprivate, bobpublic);
	let alicepublicval = 0;
	alicepublicval = Math.pow(bobpublic, aliceprivate) % alicepublic;

	res.send();
	console.log(alicepublicval);
});

app.listen(process.env.PORT || 8001, function () {
	console.log(
		"Express server listening on port %d in %s mode",
		this.address().port,
		app.settings.env
	);
});
