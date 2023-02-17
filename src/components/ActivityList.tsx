import React from 'react'
import { ProductResponse } from '../interfaces/productInterfaces';
import { Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { globalStyles } from '../theme/appTheme';
import { ProductCard } from './ProductCard';

interface Props {
    products: ProductResponse[];
}

export const ActivityList = ({ products }: Props) => {
    return (
        <FlatList
            style={{ ...styles.cardContainer }}
            data={products}
            keyExtractor={(product) => product.id}
            renderItem={({ item }) => (<ProductCard product={item} />
            )}

            // onEndReached={loadProducts}
            // onEndReachedThreshold={0.4}
            ListFooterComponent={(
                <ActivityIndicator
                    style={{ height: 100 }}
                    size={20}
                    color="grey" />
            )}
        />
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        marginVertical: 4,
        paddingVertical: 15,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        height: 350,
    }

})