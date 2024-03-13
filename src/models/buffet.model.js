import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const BuffetSchema = new Schema({
    code: {
        type: String,
        required: "Por favor indique el código del buffet",
    },
    name: {
        type: String,
        required: "Por favor indique el nombre del buffet",
    },
    price: {
        type: Number,
        required: "Por favor indique el precio del buffet",
    },
    foodType: {
        type: String,
        enum: ['marino', 'vegetal', 'frutas', 'mediterraneo'],
        required: "Por favor indique el tipo de comida del buffet",
    },
    measureUnit: {
        type: String,
        required: "Por favor indique la unidad de medida",
    },
    picture: {
        type: String,
        required: "Por favor indique una imagen del buffet",
    }
});

const Buffet = mongoose.model('Buffet', BuffetSchema, 'buffets');
export default Buffet;
