import mongoose, { models, Schema, Types } from "mongoose";

import type { Model } from "mongoose";
import { IAdminUser } from "../../types/user/admin";


export const AdminUserSchema = new Schema<IAdminUser>(
    {
        name: { type: String, required: false },
        walletAddress: { type: String, required: true, unique: true, },
        networks: [{
            type: mongoose.Schema.Types.Mixed,
            default: {}
        }]
    }
);

const AdminUser: Model<IAdminUser> = models.AdminUser || mongoose.model("AdminUser", AdminUserSchema);
export default AdminUser;
