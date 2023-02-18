import React, { useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Text, View } from 'react-native'
import { globalStyles } from '../theme/appTheme';
import { useProducts } from '../hooks/useProducts';
import { ActivityList } from '../components/ActivityList';
import { HeaderSeccion } from '../components/HeaderSeccion';
import { TotalPoints } from '../components/TotalPoints';
import { Welcome } from '../components/Welcome';
import CustomButton from '../components/CustomBotton';

export const HomeScreen = () => {

    const { isLoading, productList } = useProducts();
    const [productFiltered, setProductFiltered] = useState(productList.products);
    const [filter, setFilter] = useState('all')
    const { top } = useSafeAreaInsets();

    const onFilterProducts = (filterParam: string) => {
        if (filterParam === 'all') {
            setProductFiltered(productList.products)
        } else {
            setProductFiltered(productList.products.filter(
                (product) =>
                    (filterParam === 'ganados' && !product.is_redemption) ||
                    (filterParam !== 'ganados' && product.is_redemption)
            ))
        }
        setFilter(filterParam);
    }

    return (
        <View testID='home-screen-component' style={{
            ...globalStyles.general,
            top: top + 13
        }}>
            <Welcome />
            <Text style={{
                ...globalStyles.subtitle
            }}>Ruben Rodriguez</Text>
            <HeaderSeccion title={"TUS PUNTOS"} />
            <TotalPoints totalPoints={productList.totalPoints} />
            <HeaderSeccion title={"TUS MOVIMIENTOS"} />
            <ActivityList products={productFiltered} isLoading={isLoading} />
            {filter !== 'all' ? <CustomButton
                title="Todos"
                onPress={() => onFilterProducts('all')}
                buttonStyle={{ marginTop: 43 }}
                textStyle={{ color: '#ffffff' }}
            /> :
                <View style={{ flexDirection: 'row', justifyContent: "center", marginTop: 43 }}>
                    <CustomButton
                        title="Ganados"
                        onPress={() => onFilterProducts('ganados')}
                        buttonStyle={{
                            flex: 1,
                            marginRight: 13,
                            height: 50
                        }}
                        textStyle={{ color: '#ffffff' }}
                    />
                    <CustomButton
                        title="Canjeados"
                        onPress={() => onFilterProducts('canjeados')}
                        buttonStyle={{
                            flex: 1,
                            height: 50
                        }}
                        textStyle={{ color: '#ffffff' }}
                    />
                </View>}
        </View>

    )
}