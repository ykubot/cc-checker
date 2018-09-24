import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Ionicons } from '@expo/vector-icons';

class SettingsModal extends Component {
    render() {
        return(
            <View style={styles.settingsContainerStyle}>
                <View style={styles.settingListStyle}>
                    <Text style={styles.settingTextStyle}>App Version</Text>
                    <Text style={styles.settingTextStyle}>1.0.4</Text>
                </View>
                <TouchableOpacity onPress={Actions.privacyPolicy} style={styles.settingListStyle}>
                    <Text style={styles.settingTextStyle}>Privacy Policy</Text>
                    <Ionicons style={styles.settingTextStyle} name="ios-arrow-forward" size={24} />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = {
    settingsContainerStyle: {
        flex: 1
    },
    settingListStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        borderBottomWidth: 1,
        borderColor: '#4DD0E1',
    },
    settingTextStyle: {
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 15,
        color: '#34495e',
    }
}

export default SettingsModal;
