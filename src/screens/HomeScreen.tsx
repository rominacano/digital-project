import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Text, View } from 'react-native'
import { globalStyles } from '../theme/appTheme';
import { useProducts } from '../hooks/useProducts';
import { ActivityList } from '../components/ActivityList';
import { HeaderSeccion } from '../components/HeaderSeccion';

export const HomeScreen = () => {

    const { isLoading, products } = useProducts();
    const { top } = useSafeAreaInsets();
    return (
        <>
            <View style={{
                top: top + 13,
            }}>
                <Text style={{
                    ...globalStyles.title
                }}>Bienvenido de vuelta!</Text>
                <Text style={{
                    ...globalStyles.subtitle
                }}>Ruben Rodriguez</Text>
                <HeaderSeccion title={"TUS MOVIMIENTOS"} />
                <ActivityList products={products} />
            </View>
        </>
    )
}