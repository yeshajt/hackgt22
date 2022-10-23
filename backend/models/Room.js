const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  bathroomAlert: {
    type: String,
  },
  emergencyAlert: {
    type: String,
  },
  foodAlert: {
    type: String,
  },
  medAlert: {
    type: String,
  },
  roomNum: {
    type: String,
  },
  waterAlert: {
    type: String,
  },
});

module.exports = Room = mongoose.model("room", RoomSchema);
