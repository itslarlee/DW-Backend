import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ConsecutiveSchema = new Schema({
    code: {
        type: String,
        required: true,
        unique: true
    },
    type: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    consecutiveValue: {
        type: Number,
        required: true
    },
    hasPrefix: {
        type: Boolean,
        required: true
    }
});

const Consecutive = mongoose.model("Consecutive", ConsecutiveSchema, 'consecutives');
export default Consecutive;
