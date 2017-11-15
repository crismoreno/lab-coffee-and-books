const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placesSchema = new Schema({
  location: { type: { type: String }, coordinates: [Number] }
});

placesSchema.index({ location: "2dsphere" });

const places = mongoose.model("User", placesSchema);
module.exports = places;
