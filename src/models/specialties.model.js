import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const SpecialtySchema = new Schema({
    code: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    ingredients: [{
        type: String,
        required: true
    }],
    price: {
        type: Number,
        required: true
    },
    details: {
        type: String,
        required: false
    }
});

const Specialty = mongoose.model("Specialty", SpecialtySchema, 'specialties');
export default Specialty;
