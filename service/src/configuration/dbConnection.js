import "dotenv/config";
import mongoose from "mongoose";

export const connectiondb = async () => {
    const URI = process.env.MONGO_URL;

    if (!URI) {
        throw new Error('No se ha definido la URI de la base de datos');
    } else {
        try {
            await mongoose.connect(URI);
        } catch (e) {
            console.error(e);
            throw new Error('Error a la hora de iniciar la base de datos');
        }
    }
};