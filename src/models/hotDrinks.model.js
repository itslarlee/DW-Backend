import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const HotDrinkSchema = new Schema({
    code: {
        type: String,
        required: "Por favor indique el código de la bebida caliente",
    },
    name: {
        type: String,
        required: "Por favor indique el nombre de la bebida caliente",
    },
    price: {
        type: Number,
        required: "Por favor indique el precio de la bebida caliente",
    },
    ingredients: [{
        type: String,
        required: "Por favor indique los ingredientes de la bebida caliente",
    }],
    description: {
        type: String,
        required: "Por favor indique una descripción de la bebida caliente",
    },
    restaurant: {
        type: String,
        required: "Por favor indique el restaurante asociado a la bebida caliente",
    },
    picture: {
        type: String,
        required: "Por favor indique una imagen de la bebida caliente",
    }
});

const HotDrink = mongoose.model("HotDrink", HotDrinkSchema, 'hotDrinks');
export default HotDrink;
