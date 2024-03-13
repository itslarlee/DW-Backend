import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const SodaBrandSchema = new Schema({
    code: {
        type: String,
        required: "Por favor indique el código de la marca",
    },
    name: {
        type: String,
        required: "Por favor indique el nombre de la marca",
    }
});

const SodaBrand = mongoose.model("SodaBrand", SodaBrandSchema, 'sodaBrand');
export default SodaBrand;
