const express = require("express");

app = express();

app.get("/", (req, res) => res.send("API Sending"));

const PORT = process.env.PORT || 3001;

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
