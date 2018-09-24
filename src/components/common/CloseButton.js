import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

const CloseButton = () => {
    const { closeButtonStyle, closeButtonViewStyle, closeButtonTextStyle } = styles;

    return (
        <TouchableOpacity
            style={closeButtonStyle}
            onPress={Actions.pop}
        >
            <View style={closeButtonViewStyle}>
                <Text style={closeButtonTextStyle}>Close</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = {
    closeButtonStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeButtonViewStyle: {
        paddingTop: 6
    },
    closeButtonTextStyle: {
        fontSize: 18,
        textAlign: 'center',
        color: '#FFFFFF'
    }

};

export default CloseButton;
