import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { useEffect, useState } from 'react';
import { productsAPI } from '../api/productsAPI';
import { ProductResponse } from '../interfaces/productInterfaces';

export const useProducts = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState<ProductResponse[]>([]);
    const url = `https://6222994f666291106a29f999.mockapi.io/api/v1/products`;

    const loadProducts = async () => {
        const response = await productsAPI.get<ProductResponse[]>(url);
        mapProductList(response.data)
    }

    const mapProductList = (productList: ProductResponse[]) => {

        const newProductList: ProductResponse[] = productList.map((product) => {
            return {
                ...product,
                createdAt: format(new Date(product.createdAt), "dd 'de' MMMM, yyyy", { locale: es }),
            }
        });
        setProducts(newProductList);
        setIsLoading(false);

    }

    useEffect(() => {
        loadProducts();
    }, [])

    return {
        isLoading,
        products
    }

}
