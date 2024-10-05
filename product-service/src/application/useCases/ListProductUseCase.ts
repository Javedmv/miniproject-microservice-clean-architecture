import { IDependencies } from "../interfaces/IDependencies";

export const listProductUseCase = (dependencies: IDependencies) => {
    const {repositories: {listProduct}} = dependencies;
    return {
        execute: async (token:string) => {
            try {
                return await listProduct(token)
            } catch (error: any) {
                console.error("Detailed error:", error);
                throw new Error(`Failed to list products: ${error?.message || 'Unknown error'}`)
            }
        }
    }
}