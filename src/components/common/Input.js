import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    const { inputStyle, labelStyle, containerStyle } = styles;

    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCorrect={false}
                keyboardType='numeric'
                value={value}
                onChangeText={onChangeText}
                style={inputStyle}
            />
        </View>
    );
};

const styles = {
    inputStyle: {
        color: '#FFFFFF',
        paddingRight: 30,
        paddingLeft: 10,
        fontSize: 35,
        lineHeight: 23,
        flex: 5,
        textAlign: 'right'
    },
    labelStyle: {
        color: '#FFFFFF',
        fontSize: 18,
        paddingRight: 10,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        borderBottomWidth: 1,
        borderColor: '#FFFFFF',
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
    }
};

export { Input };
