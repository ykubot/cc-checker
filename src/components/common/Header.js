import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={ viewStyle }>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#4DD0E1',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        // paddingTop: 15,
        shadowColor: '#26C6DA',
        shadowOffset: { width: 1, height: 2},
        shadowOpacity: 0.2
    },
    textStyle: {
        fontSize: 20,
        color: "#006064"
    }
};

export {Header};
