const express = require("express");
const connectDB = require("./config/db");

app = express();

connectDB();

app.get("/", (req, res) => res.send("API Sending"));
app.use(express.json());
app.use("/api/patient", require("./routes/api/patient"));
app.use("/api/admin", require("./routes/api/admin"));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
