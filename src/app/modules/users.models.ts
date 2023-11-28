import bcrypt from 'bcrypt';
import { Schema, model } from "mongoose";
import { TUser } from "./users/users.interface";
import config from '../config';

// The user schema
const userSchema = new Schema<TUser>({
    id: { type: String, required: true, unique: true },
    password: {
        type: String,
        required: [true, 'Password is required'],
        maxlength: [20, 'Password can not be more than 20 characters'],
    },
    isDeleted: { type: Boolean, default: false },
    needsPasswordChange: { type: Boolean, default: true },
    role: { type: String, enum: ['admin', 'student', 'faculty'] },
    status: { type: String, enum: ['in-progress', 'blocked'] },
}, {
    timestamps: true
})

// pre save middleware/ hook : will work on create()  save()
userSchema.pre('save', async function (next) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const user = this; // doc
    // hashing password and save into DB
    user.password = await bcrypt.hash(
        user.password,
        Number(config.bcrypt_salt_rounds),
    );
    next();
});

// post save middleware / hook
userSchema.post('save', function (doc, next) {
    doc.password = '';
    next();
});

export const UserModel = model<TUser>('User', userSchema);
