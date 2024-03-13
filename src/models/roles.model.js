import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const RoleSchema = new Schema({
    code: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ['internal', 'external']
    }
});

const Role = mongoose.model("Role", RoleSchema, 'roles');
export default Role;
