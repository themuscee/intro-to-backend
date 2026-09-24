import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            minLength: 4,
            maxLength: 20
        },

        password: {
            type: String,
            required: true,
            minLength: 8,
            maxLength: 20
        },
        
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,

        }

    },

    {
        timestamps: true
    }
)

export const User = mongoose.model("User", userSchema)