import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import {
    initialTransaction,
    addTransaction,
    changeTransactionCoin,
    changeTransactionAmount,
    changeTransactionJpyRate,
    changeTransactionBtcRate,
    removeTransaction
} from '../actions';
import { Ionicons } from '@expo/vector-icons';
import ModalFilterPicker from 'react-native-modal-filter-picker';
import { Button } from './common';
import { COINLIST } from '../constants/CoinTypes';
import { convertCoinUnit, exchangeRateAmount } from '../utils/coin';
import { getCoinRate } from '../utils/AsyncStorage';

class AddTransactionModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false,
            selectedCoin: {}
        };

        // this.onButtonPress = this.onButtonPress.bind(this);
        this.initialTransaction = this.props.initialTransaction.bind(this);
    }

    componentWillMount() {
        // this.initialTransaction = this.props.initialTransaction.bind(this);
        // console.log(this.props.selectedCoin);
        this.initialTransaction();
        AsyncStorage.getItem('btc', (error, result) => {
            this.setState({
                selectedCoin: JSON.parse(result)
            });
            this.props.changeTransactionCoin('btc');
        });
    }

    onChangeAmount(amount) {
        // console.log(JSON.parse(this.state.selectedCoin.jpy_rate));
        this.props.changeTransactionAmount(amount);
        this.props.changeTransactionJpyRate(exchangeRateAmount(amount, this.state.selectedCoin.jpy_rate || 1));
        this.props.changeTransactionBtcRate(exchangeRateAmount(amount, this.state.selectedCoin.btc_rate || 1));
    }

    onBuyButtonPress() {
        // console.log(this.props.amount);
        this.props.addTransaction({
            transactionId: this.props.transactionId,
            date: this.props.date,
            coin: this.props.selectedCoin,
            exchange: this.props.exchange,
            transactionType: 'buy',
            amount: parseFloat(this.props.amount),
            jpy_rate: parseFloat(this.props.jpyRate),
            btc_rate: parseFloat(this.props.btcRate)
        });
    }

    onSellButtonPress() {
        // console.log(this.props.amount);
        this.props.addTransaction({
            transactionId: this.props.transactionId,
            date: this.props.date,
            coin: this.props.selectedCoin,
            exchange: this.props.exchange,
            transactionType: 'sell',
            amount: parseFloat(this.props.amount),
            jpy_rate: parseFloat(this.props.jpyRate),
            btc_rate: parseFloat(this.props.btcRate)
        });
    }

    onShow() {
        this.setState({ visible: true });
    }

    onSelect(picked) {
        AsyncStorage.getItem(picked, (error, result) => {
            // console.log(JSON.parse(result));
            this.setState({
                visible: false,
                selectedCoin: JSON.parse(result)
            });
            this.props.changeTransactionCoin(picked);
        });
    }

    onCancel() {
        this.setState({
            visible: false
        });
    }

    render() {
        const { visible, picked } = this.state;

        return(
            <View style={styles.settingsContainerStyle}>
                <View style={styles.settingListStyle}>
                    <Text style={styles.settingTextStyle}>Select Coin</Text>
                    <TouchableOpacity onPress={this.onShow.bind(this)}>
                        <Text style={styles.settingTextStyle}>{convertCoinUnit(this.props.selectedCoin)}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.settingListStyle}>
                    <Text style={styles.settingTextStyle}>Amount</Text>
                    <TextInput
                        placeholder='0.0'
                        autoCorrect={false}
                        keyboardType='numeric'
                        returnKeyType='done'
                        value={this.props.amount || ''}
                        onChangeText={this.onChangeAmount.bind(this)}
                        style={styles.inputStyle}
                    />
                </View>
                <View style={styles.settingListStyle}>
                    <Text style={styles.settingTextStyle}>Rate</Text>
                    <Text style={styles.settingTextStyle}>{this.props.jpyRate} JPY</Text>
                    <Text style={styles.settingTextStyle}>{this.props.btcRate} BTC</Text>
                </View>
                <View style={styles.settingListStyle}>
                    <Text style={styles.settingTextStyle}>Exchange</Text>
                    <TouchableOpacity onPress={this.onShow.bind(this)}>
                        <Text style={styles.settingTextStyle}>{this.props.exchange}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonViewStyle}>
                    <Button onPress={this.onBuyButtonPress.bind(this)}>
                        Buy
                    </Button>
                    <Button onPress={this.onSellButtonPress.bind(this)}>
                        Sell
                    </Button>
                </View>

                <ModalFilterPicker
                    visible={visible}
                    placeholderText='Select coin'
                    onSelect={this.onSelect.bind(this)}
                    onCancel={this.onCancel.bind(this)}
                    options={COINLIST}
                    cancelButtonStyle={styles.cancelButtonStyle}
                    cancelButtonTextStyle={styles.cancelButtonTextStyle}
                />

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
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60
    }
}

const mapStateToProps = (state) => {
    const {
        transactionId,
        date,
        selectedCoin,
        exchange,
        transactionType,
        amount,
        jpyRate,
        btcRate
    } = state.transaction;

    return {
        transactionId,
        date,
        selectedCoin,
        exchange,
        transactionType,
        amount,
        jpyRate,
        btcRate
    };
}

export default connect(mapStateToProps, {
    initialTransaction,
    addTransaction,
    changeTransactionCoin,
    changeTransactionAmount,
    changeTransactionJpyRate,
    changeTransactionBtcRate,
    removeTransaction
})(AddTransactionModal);
