import mongoose, { models, Schema, Types } from "mongoose";

import type { Model } from "mongoose";

export interface AdminUserType {
    name: string;
    walletAddress: string;
    networks: [Map<string, string>];
}

export const AdminUserSchema = new Schema<AdminUserType>(
    {
        name: { type: String, required: false },
        walletAddress: { type: String, required: true, unique: true, },
        networks: [{
            type: mongoose.Schema.Types.Mixed,
            default: {}
        }]
    }
);

const AdminUser: Model<AdminUserType> = models.AdminUser || mongoose.model("AdminUser", AdminUserSchema);
export default AdminUser;
