import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({onPress, children}) => {
    const { textStyle, buttonStyle } = styles;

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        // alignItems: 'center',
        color: '#007aff',
        fontSize: 16,
    },
    buttonStyle: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        // alignSelf: 'stretch',
        backgroundColor: '#FFF',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        margin: 5,
        height: 50
    }
};

export {Button};
