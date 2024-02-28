import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
    code: {
        type: String,
        required: "Por favor indique el código del restaurante",
    },
    name: {
        type: String,
        required: "Por favor indique el nombre del restaurante",
    },
    address: {
        type: String,
        required: "Por favor indique la dirección del restaurante",
    },
    clientCapacity: {
        type: Number,
        required: "Por favor indique la capacidad de clientes del restaurante",
    },
    phoneNumber: {
        type: String,
        required: "Por favor indique el número de teléfono del restaurante",
    },
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema, 'restaurants');
export default Restaurant;
