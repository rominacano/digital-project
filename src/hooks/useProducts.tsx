import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { useEffect, useState } from 'react';
import { productsAPI } from '../api/productsAPI';
import { ProductResponse, ProductSimpleList } from '../interfaces/productInterfaces';

export const useProducts = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [productList, setProductList] = useState<ProductSimpleList>({ totalPoints: '0.00', products: [] });
    const url = `https://6222994f666291106a29f999.mockapi.io/api/v1/products`;

    const loadProducts = async (filterParam = 'all') => {
        const response = await productsAPI.get<ProductResponse[]>(url);
        mapProductList(response.data, filterParam)
    }

    const mapProductList = (productList: ProductResponse[], filterParam: string) => {

        const filteredProducts = filterParam !== 'all'
            ? productList.filter(product => filterParam === 'ganados' ? !product.is_redemption : product.is_redemption)
            : productList;

        const newProductList: ProductResponse[] = filteredProducts
            .map((product) => {
                return {
                    ...product,
                    createdAt: format(new Date(product.createdAt), "dd 'de' MMMM, yyyy", { locale: es }),
                }
            });

        const total = productList.reduce((sum, product) => !product.is_redemption ? sum + product.points : sum - product.points, 0);
        const totalPoints = total.toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })

        setProductList({ totalPoints, products: newProductList });
        setIsLoading(false);

    }

    useEffect(() => {
        loadProducts();
    }, [])

    return {
        isLoading,
        productList,
        loadProducts
    }

}
