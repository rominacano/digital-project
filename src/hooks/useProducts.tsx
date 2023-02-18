import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { useEffect, useState } from 'react';
import { productsAPI } from '../api/productsAPI';
import { ProductResponse, ProductSimpleList } from '../interfaces/productInterfaces';

export const useProducts = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [productList, setProductList] = useState<ProductSimpleList>({
        totalPoints: '0.00',
        products: [],
    });
    const url = `https://6222994f666291106a29f999.mockapi.io/api/v1/products`;

    const loadProducts = async (filterParam = 'all', retryCount = 3) => {
        setIsLoading(true);
        try {
            const response = await productsAPI<ProductResponse[]>(url);
            const mappedProducts = mapProducts(response.data);
            setProductList(mappedProducts);
            setIsLoading(false);
        } catch (error) {
            if (retryCount > 0) {
                // Retry the request after a delay
                setTimeout(() => {
                    loadProducts(filterParam, retryCount - 1);
                }, 1000);
            } else {
                console.error('Error loading products', error);
                setIsLoading(false);
            }
        }
    };

    const mapProducts = (productList: ProductResponse[]) => {
        const mappedProducts = productList.map((product) => ({
            ...product,
            createdAt: format(new Date(product.createdAt), "dd 'de' MMMM, yyyy", {
                locale: es,
            }),
        }));

        const total = productList.reduce(
            (sum, product) =>
                !product.is_redemption ? sum + product.points : sum - product.points,
            0
        );
        const totalPoints = total.toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });

        return { totalPoints, products: mappedProducts };
    };

    useEffect(() => {
        loadProducts();
    }, []);

    return {
        isLoading,
        productList,
    };
};