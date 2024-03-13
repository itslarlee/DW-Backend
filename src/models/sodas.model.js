import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const SodaSchema = new Schema({
    code: {
        type: String,
        required: "Por favor indique el código de la soda",
    },
    name: {
        type: String,
        required: "Por favor indique el nombre de la soda",
    },
    price: {
        type: Number,
        required: "Por favor indique el precio de la soda",
    },
    ingredients: [{
        type: String,
        required: "Por favor indique los ingredientes de la soda",
    }],
    nationality: {
        type: String,
        required: "Por favor indique la nacionalidad de la soda",
    },
    description: {
        type: String,
        required: "Por favor indique una descripción de la soda",
    },
    brand: {
        type: String,
        required: "Por favor indique la marca de la soda",
    },
    restaurant: {
        type: String,
        required: "Por favor indique el restaurante asociado a la soda",
    },
    picture: {
        type: String,
        required: "Por favor indique una imagen de la soda",
    }
});

const Soda = mongoose.model("Soda", SodaSchema, 'sodas');
export default Soda;
