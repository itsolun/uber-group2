// Mongoose
const mongoose = require("mongoose");

/**
 * Represents a User Schema.
 * @constructor
 */
const users_schema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  username: { type: String, unique: true, required: true, trim: true },
  password: String,
  email: { type: String, unique: true },
  // token: 
  current_location: {
    type: { type: String, required: true, default: "Point" },
    coordinates: [Number]
  },
  mobile_number: { type: Number },
  status: { type: Boolean },
  trips: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "trips"
  }]

});

/**
 * Represents a Cop's Schema.
 * @constructor
 */
const drivers_schema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  username: { type: String, unique: true, required: true, trim: true },
  password: String,
  email: { type: String, unique: true },
  // token	
  current_location: {
    type: { type: String, required: true, default: "Point" },
    coordinates: [Number],
  },

  available: { type: Boolean },
  mobile_number: Number,
  status: { type: Boolean },
  current_car: {
    car_model: { type: String },
    car_year: { type: Number },
    license: { type: String },
    plat_numbers: { type: String },
  },
  trips: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "trips"
  }]
});

/**
 * Represents trips Schema.
 * @constructor
 */
const trips_schema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  start_point: {
    type: { type: String, required: true, default: "Point" },
    coordinates: [Number],
  },
  destination: {
    type: { type: String, required: true, default: "Point" },
    coordinates: [Number],
  },

  arrival_time: Date,
  start_time: Date,
  cost: Number,
  driver_id: mongoose.Types.ObjectId,
  rider_id: _id = mongoose.Types.ObjectId

});

const users = mongoose.model("users", users_schema);
const drivers = mongoose.model("drivers", drivers_schema);
const trips = mongoose.model("trips", trips_schema);

module.exports = users;
module.exports = drivers;
module.exports = trips;