const Joi = require('joi');

const UsersJoiSchema = Joi.object(
    {
        username: Joi.string()
            .alphanum()
            .min(5)
            .max(25)
            .required(),

        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
            .required(),

        email: Joi.string()
            .pattern(new RegExp('^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$'))
            .required(),

        // token: Joi.string().number().required(),
        current_location: Joi.required(),

        mobile_number: Joi.number()
            .pattern(new RegExp('(201)[0-9]{9}'))
            .required(),

        status: Joi.boolean()
    }
);

const DriversJoiSchema = Joi.object(
    {
        username: Joi.string()
            .alphanum()
            .min(5)
            .max(25)
            .required(),

        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
            .required(),

        email: Joi.string()
            .pattern(new RegExp('^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$'))
            .required(),

        // token: Joi.string().number().required(),
        current_location: Joi.required(),

        mobile_number: Joi.number()
            .pattern(new RegExp('(201)[0-9]{9}'))
            .required(),

        status: Joi.boolean(),

        available: Joi.boolean(),

        // current_car: Joi.ref(CarJoiSchema)
    }
);

const CarsJoiSchema = Joi.object(
    {
        car_model: Joi.string()
            .required(),

        car_year: Joi.number()
            .required(),

        license: Joi.string(),

        plate_numbers: Joi.string()
            .required(),

        // driver: Joi.ref(DriversJoiSchema)
    }
);

const TripsJoiSchema = Joi.object(
    {
        start_point: Joi.required(),

        destination: Joi.required(),

        arrival_time: Joi.string()
            .pattern(new RegExp('^([0-9]{2})\:([0-9]{2})$'))
            .required(),

        start_time: Joi.string().pattern(new RegExp('^([0-9]{2})\:([0-9]{2})$')).required(),

        cost: Joi.number()
            .required(),
    }
);

module.exports.UsersJoiSchema = UsersJoiSchema;
module.exports.DriversJoiSchema = DriversJoiSchema;
module.exports.TripsJoiSchema = TripsJoiSchema;
module.exports.CarsJoiSchema = CarsJoiSchema;




























