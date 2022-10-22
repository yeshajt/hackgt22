const express = require("express");
const router = express.Router();

const Room = require("../../models/Room");

router.get("/", (req, res) => res.send("Patient Route"));

router.get("/find", async function (req, res) {
  let num = req.query.roomNum;

  const room = await Room.find();

  if (!room) {
    return res.status(400).json({ msg: "Nope" });
  }
  res.json(room);
});

module.exports = router;
