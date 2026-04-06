import 'dotenv/config';
import jwt from "jsonwebtoken";

export const authRequired = (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        return res.status(401).json({ message: "No hay token, autorización denegada" });
    }

    jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
        if (error) {
            return res.status(401).json({ message: "Token inválido" });
        }
        req.user = user;
        next();
    });
};