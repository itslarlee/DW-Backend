import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const LiquorBrandSchema = new Schema({
    code: {
        type: String,
        required: "Por favor indique el código de la marca de licor",
    },
    name: {
        type: String,
        required: "Por favor indique el nombre de la marca de licor",
    },
});

const LiquorBrand = mongoose.model("LiquorBrand", LiquorBrandSchema, 'liquorBrands');
export default LiquorBrand;
