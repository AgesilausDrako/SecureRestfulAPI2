import mongoose from 'mongoose';
import bcyrpt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserSchema } from '../models/userModel';

const User = mongoose.model('User', UserSchema);

export const register = (req, res) => {
    const newUser = new User(req.body);
    newUser.hashPassword = bcrypt.hashSync(req.body.password, 10);
    newUser.save((err, user) => {
        if (err) {
            return res.status(400).send({
                message: err
            });
        } else {
            user.hashPassword = undefinded;
            return res.json(user);
        }
    })
}

export const login = (req, res) => {
    
}

export const loginRequired = (req, res) => {
    
}