import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const WineNationalitySchema = new Schema({
    code: {
        type: String,
        required: "El código es obligatorio",
        unique: true
    },
    country: {
        type: String,
        required: "El país es obligatorio"
    }
});

const WineNationality = mongoose.model("WineNationality", WineNationalitySchema, 'wineNationalities');
export default WineNationality;
