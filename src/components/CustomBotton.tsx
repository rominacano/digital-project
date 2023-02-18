import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface Props {
    title: string;
    onPress: () => void;
    buttonStyle?: ViewStyle;
    textStyle?: TextStyle;
}

const CustomButton = ({ title, onPress, buttonStyle, textStyle }: Props) => {
    return (
        <TouchableOpacity testID='button' onPress={onPress} style={[styles.button, buttonStyle]}>
            <Text style={[styles.text, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#334FFA',
        padding: 14,
        borderRadius: 10,
        alignItems: 'center',
    },
    text: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '800',
    },
});

export default CustomButton;



