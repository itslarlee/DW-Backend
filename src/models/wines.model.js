import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const WineSchema = new Schema({
    code: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    priceUnit: {
        type: String,
        required: true
    },
    priceBottle: {
        type: Number,
        required: true
    },
    harvestYear: {
        type: Number,
        required: true
    },
    ingredients: [{
        type: String,
        required: true
    }],
    nationality: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    restaurant: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true
    }
});

const Wine = mongoose.model("Wine", WineSchema, 'wines');
export default Wine;
