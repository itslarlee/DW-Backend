import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: "Por favor indique el nombre",
    },
    lastName: {
        type: String,
        required: "Por favor indique el apellido",
    },
    role: {
        type: String,
        required: "Por favor indique el rol del usuario",
    },
});

const User = mongoose.model('User', UserSchema, 'Users');
export default User;
