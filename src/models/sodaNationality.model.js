import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const SodaNationalitySchema = new Schema({
    code: {
        type: String,
        required: "Por favor indique el código de la nacionalidad",
    },
    country: {
        type: String,
        required: "Por favor indique el país",
    },
});

const SodaNationality = mongoose.model("SodaNationality", SodaNationalitySchema, 'sodaNationalities');
export default SodaNationality;
