import { useEffect, useState } from 'react';
import { productsAPI } from '../api/productsAPI';
import { ProductResponse } from '../interfaces/productInterfaces';

export const useProducts = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState<ProductResponse[]>([]);
    const url = `https://6222994f666291106a29f999.mockapi.io/api/v1/products`;

    const loadProducts = async () => {
        const response = await productsAPI.get<ProductResponse[]>(url);
        setProducts(response.data);
        setIsLoading(false);
    }

    // const filterProductList = ( productList: ProductResponse[]) => {

    // }

    useEffect(() => {
        loadProducts();
    }, [])

    return {
        isLoading,
        products
    }

}
