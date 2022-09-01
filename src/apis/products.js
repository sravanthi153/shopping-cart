// getting all products 

import Request from "helpers/request"

export const getAllProducts = () => {
    return Request({
        URL: "products",
        method: "get",
    })
}


//get perticular product data
export const getProduct = async (pid) => {
    return Request({
        URL: `products/${pid}`,
        method: "get",

    })
}