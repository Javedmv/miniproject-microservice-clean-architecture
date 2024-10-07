import userCreatedConsumer from "./consumers/userCreatedConsumer";
import productCreatedConsumer from "./consumers/productCreatedConsumer";

export const createSubscriber = () => {
    return {
        userCreated: userCreatedConsumer,
        productcreated: productCreatedConsumer
    }
}