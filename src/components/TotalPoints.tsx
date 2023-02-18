import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface Props {
    totalPoints: string;
}

export const TotalPoints = ({ totalPoints }: Props) => {
    return (
        <View style={styles.cardContainer}>
            <Text style={styles.textMount}>Diciembre</Text>
            <Text style={styles.textPoint}>{`${totalPoints} pts`}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        width: 286,
        height: 143,
        backgroundColor: '#334FFA',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.5)',
        borderRadius: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    textMount: {
        marginTop: 21,
        left: 19,
        fontSize: 14,
        fontWeight: '800',
        color: '#fff'
    },
    textPoint: {
        fontSize: 32,
        fontWeight: '800',
        top: 14,
        marginLeft: 'auto',
        marginRight: 'auto',
        color: '#fff'
    },
})
