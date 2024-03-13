import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ColdDrinkSchema = new Schema({
    code: {
        type: String,
        required: "Por favor indique el código de la bebida fría",
    },
    name: {
        type: String,
        required: "Por favor indique el nombre de la bebida fría",
    },
    price: {
        type: Number,
        required: "Por favor indique el precio de la bebida fría",
    },
    ingredients: [{
        type: String,
        required: "Por favor indique los ingredientes de la bebida fría",
    }],
    description: {
        type: String,
        required: "Por favor indique una descripción de la bebida fría",
    },
    restaurant: {
        type: String,
        required: "Por favor indique el restaurante asociado a la bebida fría",
    },
    picture: {
        type: String,
        required: "Por favor indique una imagen de la bebida fría",
    }
});

const ColdDrink = mongoose.model("ColdDrink", ColdDrinkSchema, 'coldDrinks');
export default ColdDrink;
