import { ObjectId } from 'mongoose';

export interface productRequest {
    _id:ObjectId,
    name: string,
    description: string,
    price: number,
    stock: number
}