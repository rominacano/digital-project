import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CustomButton from '../components/CustomBotton'
import { FadeInImage } from '../components/FadeInImage'
import { RootStackParams } from '../navigator/Navigator'

interface Props extends StackScreenProps<RootStackParams, 'ProductScreen'> { };

export const ProductScreen = ({ navigation, route }: Props) => {

    const { product } = route.params;

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.headerContainer}>
                <Text style={styles.textProductName}>{product.product}</Text>
            </View>
            <View style={styles.cardContainer}>
                <FadeInImage
                    uri={product.image}
                    style={styles.cardImage}
                />
                <Text style={styles.subtitle}>Detalles del producto:</Text>
                <Text style={styles.textProductDate}>{`Comprado el ${product.createdAt}`}</Text>
                <Text style={styles.subtitle}>Con esta compra acumulaste:</Text>
                <Text style={styles.textPoint}>{`${product.points} puntos`}</Text>
                <CustomButton
                    title="Aceptar"
                    onPress={() => navigation.pop()}
                    buttonStyle={{ marginTop: 47 }}
                    textStyle={{ color: '#ffffff' }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        height: 150,
        zIndex: 999,
        backgroundColor: "#CFD6FF"
    },
    cardContainer: {
        paddingTop: 19,
        paddingLeft: 20,
        paddingRight: 20
    },
    textProductName: {
        left: 20,
        top: 102,
        fontSize: 24,
        fontWeight: '800',
    },
    cardImage: {
        width: 353,
        height: 350,
        borderRadius: 10,
        marginBottom: 12
    },
    subtitle: {
        marginTop: 20,
        fontSize: 14,
        fontWeight: '800',
        color: '#9B9898'
    },
    textProductDate: {
        marginTop: 19,
        fontSize: 16,
        fontWeight: '800'
    },
    textPoint: {
        marginTop: 32,
        fontSize: 24,
        fontWeight: '800',
    }
})
