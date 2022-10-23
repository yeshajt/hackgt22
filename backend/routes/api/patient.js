const express = require("express");
const router = express.Router();

const Room = require("../../models/Room");

router.get("/", (req, res) => res.send("Patient Route"));

router.get("/find", async function (req, res) {
  let num = req.query.roomNum;

  const room = await Room.findOne({ roomNum: num });

  if (!room) {
    return res.status(400).json({ msg: "Nope" });
  }
  res.json(room);
});

router.patch("/update", async function (req, res) {
  let b = req.body;
  console.log(b);
  await Room.findOneAndUpdate({ roomNum: b.roomNum }, req.body);
  const room = await Room.findOne({ roomNum: b.roomNum });

  res.json(room);
});

module.exports = router;
