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

    const { isLoading, productList, loadProducts } = useProducts();
    const [filter, setFilter] = useState('all')
    const { top } = useSafeAreaInsets();

    const onFilterProducts = (filter: string) => {
        setFilter(filter);
        loadProducts(filter);
    }

    return (
        <View style={{
            ...globalStyles.general,
            top: top + 13,
        }}>
            <Welcome />
            <Text style={{
                ...globalStyles.subtitle
            }}>Ruben Rodriguez</Text>
            <HeaderSeccion title={"TUS PUNTOS"} />
            <TotalPoints totalPoints={productList.totalPoints} />
            <HeaderSeccion title={"TUS MOVIMIENTOS"} />
            <ActivityList products={productList.products} isLoading={isLoading} />
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