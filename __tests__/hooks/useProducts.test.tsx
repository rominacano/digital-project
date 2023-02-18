import { renderHook } from '@testing-library/react-hooks'
import { useProducts } from '../../src/hooks/useProducts';

describe('useProducts', () => {

    it('should load products and format the date correctly', async () => {
        const { result, waitFor } = renderHook(() => useProducts());
        await waitFor(() => result.current.isLoading === false, { timeout: 3000 });

        expect(result.current.productList.products.length).toBe(13);
        expect(result.current.productList.products[0].product).toBe('Handmade Metal Shoes');
        expect(result.current.productList.products[0].createdAt).toBe('09 de diciembre, 2022');

    });

    it('should sum point is correctly', async () => {

        const { result, waitFor } = renderHook(() => useProducts());
        await waitFor(() => result.current.isLoading === false, { timeout: 3000 });
        expect(result.current.productList.totalPoints).toBe('390,139.00');

    })
});
