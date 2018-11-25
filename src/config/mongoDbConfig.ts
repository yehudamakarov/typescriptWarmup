import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import { mongoDbConnectionStringDevelopment } from "./developmentKeys";
import { mongoDbConnectionStringProduction } from "./productionKeys";

export const mongoDbConfig = () => {
    if (process.env.NODE_ENV === "production") {
        mongoose.connect(mongoDbConnectionStringProduction);
    } else {
        mongoose.connect(mongoDbConnectionStringDevelopment);
    }
};
