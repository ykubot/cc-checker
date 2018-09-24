import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Ionicons } from '@expo/vector-icons';

const SettingsButton = () => {
    const { settingsButtonStyle, settingsButtonViewStyle, settingsButtonTextStyle } = styles;

    return (
        <TouchableOpacity
            style={settingsButtonStyle}
            onPress={Actions.settingsModal}
        >
            <View style={settingsButtonViewStyle}>
                <Ionicons name="ios-settings" size={24} color="#FFFFFF" />
            </View>
        </TouchableOpacity>
    );
};

const styles = {
    settingsButtonStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    settingsButtonViewStyle: {
        paddingTop: 0
    },
    settingsButtonTextStyle: {
        fontSize: 18,
        textAlign: 'center',
        color: '#FFFFFF'
    }

};

export default SettingsButton;
