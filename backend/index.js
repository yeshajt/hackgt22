const express = require("express");

app = express();

app.get("/", (req, res) => res.send("API Sending"));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
