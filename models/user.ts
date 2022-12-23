import mongoose, { models, Schema, Types } from "mongoose";

import type { Model } from "mongoose";

import type { User as UserType } from "../types/user";




export const UserSchema = new Schema<UserType>(
    {
        userid: { type: String, required: true },
        name: { type: String, require: false },
        email: { type: String, required: false },
        role: { type: String },
        active: { type: Boolean },
        data: [{
            provider: String,
            userid: String,
            network: String,
            handle: String
        }],
    }
);

const User: Model<UserType> = models.User || mongoose.model("User", UserSchema);
export default User;
