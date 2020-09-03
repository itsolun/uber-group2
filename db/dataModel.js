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
    ref: "Trips"
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
    ref: "Trips"
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
  driver_id: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
  rider_id: _id = { type: mongoose.Schema.Types.ObjectId, ref: "Drivers" }

});

const Users = mongoose.model("Users", users_schema);
const Drivers = mongoose.model("Drivers", drivers_schema);
const Trips = mongoose.model("Trips", trips_schema);

module.Users = Users;
module.Drivers = Drivers;
module.Trips = Trips;