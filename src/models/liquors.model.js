import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const LiquorSchema = new Schema({
    code: {
        type: String,
        required: "Por favor indique el código del licor",
    },
    name: {
        type: String,
        required: "Por favor indique el nombre del licor",
    },
    price: {
        type: Number,
        required: "Por favor indique el precio por unidad del licor",
    },
    priceUnit: {
        type: String,
        required: "Por favor indique la unidad de precio del licor",
    },
    priceBottle: {
        type: Number,
        required: "Por favor indique el precio por botella del licor",
    },
    ingredients: [{
        type: String,
        required: "Por favor indique los ingredientes del licor",
    }],
    nationality: {
        type: String,
        required: "Por favor indique la nacionalidad del licor",
    },
    description: {
        type: String,
        required: "Por favor indique una descripción del licor",
    },
    brand: {
        type: String,
        required: "Por favor indique la marca del licor",
    },
    restaurant: {
        type: String,
        required: "Por favor indique el restaurante asociado al licor",
    },
    picture: {
        type: String,
        required: "Por favor indique una imagen del licor",
    }
});

const Liquor = mongoose.model("Liquor", LiquorSchema, 'liquors');
export default Liquor;
