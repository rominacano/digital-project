import React from 'react'
import { Text } from 'react-native';
import { globalStyles } from '../theme/appTheme';

interface Props {
    title: string;
}

export const HeaderSeccion = ({ title }: Props) => {

    return (
        <Text
            style={{
                ...globalStyles.cardTitle,
                top: 20,
                marginBottom: 40
            }}>
            {title}
        </Text>
    )
}
