import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    code: {
        type: String,
        required: true,
        unique: true
    },
    id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    nationality: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    secondLastName: {
        type: String,
        required: false
    },
    primaryPhoneNumber: {
        type: String,
        required: true
    },
    secondaryPhoneNumber: {
        type: String,
        required: false
    },
    nameOfRole: {
        type: String,
        required: true
    },
    nameOfRestaurant: {
        type: String,
        required: true
    }
});

const Employee = mongoose.model("Employee", EmployeeSchema, 'employees');
export default Employee;
