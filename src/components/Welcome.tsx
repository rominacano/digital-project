import React from 'react'
import { Text } from 'react-native'
import { globalStyles } from '../theme/appTheme'

export const Welcome = () => {
    return (
        <Text style={{
            ...globalStyles.title
        }}>Bienvenido de vuelta!</Text>
    )
}
