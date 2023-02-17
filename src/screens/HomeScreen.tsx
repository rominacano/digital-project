import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { useProducts } from '../hooks/useProducts';

export const HomeScreen = () => {

    const { isLoading, products } = useProducts();
    const { top } = useSafeAreaInsets();
    return (
        <View style={{
            ...styles.title,
            ...styles.globalMargin,
            top: top + 13
        }}>
            <Text style={{
                ...styles.title
            }}>Bienvenido de vuelta!</Text>
            <Text style={{
                ...styles.subtitle
            }}>Ruben Rodriguez</Text>
        </View>
    )
}