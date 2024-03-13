import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const WineBrandSchema = new Schema({
    code: {
        type: String,
        required: "El código es obligatorio",
        unique: true
    },
    name: {
        type: String,
        required: "El nombre es obligatorio"
    }
});

const WineBrand = mongoose.model("WineBrand", WineBrandSchema, 'wineBrands');
export default WineBrand;
