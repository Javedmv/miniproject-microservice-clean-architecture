export const validateProductRequest = (data: any): {isValid: boolean; errors?: string[]} => {
    const errors: string[] = [];

    const {name, description, price, stock} = data;
    
    if(!name || !description || !price){
        errors.push("Name, description, and price are required fields.");
    }
    if(typeof name !== "string"){
        errors.push("Name must be a string")
    }
    if (typeof description !== "string") {
        errors.push("Description must be a string.");
    }

    if (typeof price !== "number") {
        errors.push("Price must be a number.");
    }

    if (typeof stock !== "number" || stock < 0) {
        errors.push("Stock must be a non negative number.")
    }

    return {isValid: errors.length === 0,errors};
}