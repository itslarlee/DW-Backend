import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const TableSchema = new Schema({
    code: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    numberOfChairs: {
        type: Number,
        required: true
    },
    restaurant: {
        type: String,
        required: true
    }
});

const Table = mongoose.model("Table", TableSchema, 'tables');
export default Table;
