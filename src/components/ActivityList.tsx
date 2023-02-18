import React from 'react'
import { ProductResponse } from '../interfaces/productInterfaces';
import { StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { ProductCard } from './ProductCard';

interface Props {
    products: ProductResponse[];
    isLoading: boolean,
}

export const ActivityList = ({ products, isLoading }: Props) => {
    return (
        <FlatList
            testID="activity-list-component"
            style={{ ...styles.cardContainer }}
            data={products}
            keyExtractor={(product) => product.id}
            renderItem={({ item }) => (<ProductCard product={item} />
            )}
            ListFooterComponent={isLoading ? (
                <ActivityIndicator
                    testID='loading-indicator'
                    style={{ height: 100 }}
                    size={20}
                    color="grey" />
            ) : null}
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