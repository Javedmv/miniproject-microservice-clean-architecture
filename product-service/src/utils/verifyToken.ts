import jwt from "jsonwebtoken";

export const verifyToken = (token: string): Promise<any> => {
    const secretKey: jwt.Secret = process.env.AUTH_JWT_SECRET as jwt.Secret;

    return new Promise((resolve, reject) => {
        jwt.verify(token, secretKey, (error, decodedToken) => {
            if (error) {
                return reject(new Error(error.message));
            }
            console.log("🚀 ~ file: verifyToken.ts:8 ~ verifyToken ~ decodedToken:", decodedToken);
            resolve(decodedToken);
        });
    });
};
