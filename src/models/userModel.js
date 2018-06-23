import mongoose from 'mongoose';

const Schema = mongoose.Schema;
import bcrypt from 'bcrypt';

export const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true
    },
    hashPassword: {
        type: String,
        required: true
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

UserSchema.methods.comparePassword = (password, hashPassword) => {
    return bcrypt.compareSync(password, hashPassword);
};
