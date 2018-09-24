import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Button } from './common';
import { convertCoinUnit, exchangeRateAmount } from '../utils/coin';
import { getCoinRate } from '../utils/AsyncStorage';

class TransactionDetail extends Component {
    constructor(props) {
        super(props);
        // console.log(this.props);

        this.state = {
            transactionId: this.props.transactionId,
            date: this.props.date,
            transactionType: this.props.transactionType,
            coin: this.props.coin,
            exchange: this.props.exchange,
            amount: this.props.amount,
            jpy_rate: this.props.jpy_rate,
            btc_rate: this.props.btc_rate
        };
    }

    componentWillMount() {
    }

    onDeleteButtonPress() {
        console.log('onDeleteButtonPress');
    }

    render() {

        return(
            <View style={styles.settingsContainerStyle}>
                <View style={styles.settingListStyle}>
                    <Text style={styles.settingTextStyle}>Select Coin</Text>
                    <TouchableOpacity >
                        <Text style={styles.settingTextStyle}>{convertCoinUnit(this.state.coin)}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.settingListStyle}>
                    <Text style={styles.settingTextStyle}>Amount</Text>
                    <TextInput
                        placeholder='0.0'
                        autoCorrect={false}
                        keyboardType='numeric'
                        value={(this.state.amount).toString() || ''}
                        style={styles.inputStyle}
                    />
                </View>
                <View style={styles.settingListStyle}>
                    <Text style={styles.settingTextStyle}>Rate</Text>
                    <Text style={styles.settingTextStyle}>{this.state.jpy_rate} JPY</Text>
                    <Text style={styles.settingTextStyle}>{this.state.btc_rate} BTC</Text>
                </View>
                <View style={styles.settingListStyle}>
                    <Text style={styles.settingTextStyle}>Exchange</Text>
                    <TouchableOpacity >
                        <Text style={styles.settingTextStyle}>{this.state.exchange}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonViewStyle}>
                    <Button onPress={this.onDeleteButtonPress.bind(this)}>
                        Delete Transaction
                    </Button>
                </View>

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
    },
    inputStyle: {
        color: '#000000',
        paddingRight: 30,
        paddingLeft: 10,
        fontSize: 35,
        lineHeight: 23,
        flex: 5,
        textAlign: 'right'
    },
    cancelButtonStyle: {
        backgroundColor: '#34495e',
        height: 40,
        width: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cancelButtonTextStyle: {
        color: '#FFFFFF'
    },
    buttonViewStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60
    }
}

export default TransactionDetail;
