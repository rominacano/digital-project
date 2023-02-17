import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { ProductResponse } from '../interfaces/productInterfaces';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { FadeInImage } from './FadeInImage';

interface Props {
    product: ProductResponse;
}

export const ProductCard = ({ product }: Props) => {
    return (
        <TouchableOpacity>
            <View style={styles.cardContainer}>
                <FadeInImage
                    uri={product.image}
                    style={styles.cardImage} />
                <View>
                    <Text style={styles.textProductName}>{product.product}</Text>
                    <Text style={styles.textProductDate}>{product.createdAt}</Text>
                </View>
                <View style={styles.textPointContainer}>
                    {
                        !product.is_redemption ? <Icon
                            name="add-outline"
                            color="#00B833"
                            size={16}
                        /> : <Icon
                            name="remove-outline"
                            color="#FF0000"
                            size={16}
                        />
                    }
                    <Text style={styles.textPoint}>{product.points}</Text>
                    <Icon style={{ marginLeft: 12 }}
                        name="chevron-forward-outline"
                        color="#070707"
                        size={16}
                    />
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        marginVertical: 8,
    },
    cardImage: {
        width: 45,
        height: 45,
        borderRadius: 10,
        marginHorizontal: 10,
    },
    textProductName: {
        top: 5,
        fontSize: 14,
        fontWeight: '800',
    },
    textProductDate: {
        top: 7,
        fontSize: 12,
        fontWeight: '400'
    },
    textPointContainer: {
        flexDirection: 'row',
        top: 18,
        position: 'absolute',
        right: 0
    },
    textPoint: {
        fontWeight: '800',
    }
})
