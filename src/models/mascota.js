import mongoose from "mongoose";

const schema = mongoose.Schema;

export const MascotaSchema = new schema({
    dueno: {
        type: String,
        required: "Por favor indique el nombre del dueño",
    },
    nombreMascota: {
        type: String,
        required: "Por favor indique el nombre de la mascota",
    },
    edad: {
        type: Number,
        required: "Por favor indique la edad de la mascota",
    },
    peso: {
        type: Number,
        required: "Por favor indique el peso de la mascota",
    },
});

const Mascota = mongoose.model("Mascota", MascotaSchema, 'Mascota');
export default Mascota;
