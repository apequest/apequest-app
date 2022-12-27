import mongoose from "mongoose";

export interface IUserWallet {
  userid: string;
  provider: string;
  network: string;
  handle: string;
}


export interface User {
  _id: mongoose.Types.ObjectId;
  userid: string;
  name?: string;
  email: string | undefined;
  role: "user" | "admin";
  active?: boolean;
  data?: IUserWallet[];
}

