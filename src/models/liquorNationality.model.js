import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const LiquorNationalitySchema = new Schema({
    code: {
        type: String,
        required: "Por favor indique el código de la nacionalidad del licor",
    },
    country: {
        type: String,
        required: "Por favor indique el país de la nacionalidad del licor",
    },
});

const LiquorNationality = mongoose.model("LiquorNationality", LiquorNationalitySchema, 'liquorNationalities');
export default LiquorNationality;
