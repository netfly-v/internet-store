import { GET_ALL_PRODUCTS, GET_PRODUCTS } from "./types";

export const getProducts = products => ({ type: GET_PRODUCTS, products });
export const getAllProducts = products => ({ type: GET_ALL_PRODUCTS, products });