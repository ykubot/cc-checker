import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    AsyncStorage
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import FolioListItem from './FolioListItem';
import { connect } from 'react-redux';
import { Button } from './common';
import { portfolioInitialized } from '../actions';
import {
    BTC, ETH, ETC, LISK, FACT, MONERO, AUGUR, RIPPLE, ZCASH, NEM, LTC, DASH, BCH
} from '../constants/CoinTypes';
import {
    exchangeRateAmount
} from '../utils/coin';

class MyPortfolio extends Component {
    constructor(props) {
        super(props);

        // AsyncStorage.clear((err) => console.log(err) );

        this.state = {
            isLoading: true,
            totalPrice: 0,
            transactions: [],
            folioCoins: []
        }

    }

    componentWillMount() {
        this._loadTransactions();
    }

    onRenderTransactions() {
        if (this.state.transactions){
            // console.log(this.state.transactions);
            return this.state.transactions.map((transaction, key) => <FolioListItem key={key} coin={transaction.coin} />);
        }
    }

    onRenderFolioCoins() {
        if (this.state.folioCoins){
            // console.log(this.state.transactions);
            return this.state.folioCoins.map((folioCoin, key) => <FolioListItem key={key} coin={folioCoin.coin} amount={folioCoin.amount} />);
        }
    }

    _loadTransactions() {
        AsyncStorage.getItem('transactions', (error, response) => {
            let transactions = JSON.parse(response);
            // console.log(transactions);
            this.setState({ transactions: transactions || [] });
            let coinSums = {};
            if (transactions) {
                transactions.forEach((transaction, index) => {
                    if (transaction.transactionType === 'buy') {
                        coinSums[transaction.coin] = (coinSums[transaction.coin] || 0) + transaction.amount;
                    } else if (transaction.transactionType === 'sell') {
                        coinSums[transaction.coin] = (coinSums[transaction.coin] || 0) - transaction.amount;
                    }
                });
                let coinSums_json = [];
                for (let coin in coinSums){
                    coinSums_json.push({ coin: coin, amount: coinSums[coin] });
                }
                this.setState({folioCoins: coinSums_json});
                this._convertTotalPrice(coinSums_json);
                // console.log(coinSums_json);
            }
        });
    }

    async _convertTotalPrice(folioCoins) {
        let sum_jpy_price = 0;
        for (let coin_amount of folioCoins) {
            await AsyncStorage.getItem(coin_amount.coin, (error, response) => {
                if (response) {
                    coin_rate = JSON.parse(response);
                    // console.log(coin_rate);
                    sum_jpy_price = sum_jpy_price + (coin_amount.amount * parseFloat(coin_rate.jpy_rate));
                    // console.log(sum_jpy_price);
                }
            });
        }
        this.setState({totalPrice: sum_jpy_price});
        // console.log(sum_jpy_price);
    }

    render() {
        return(
            <View style={styles.containerStyle}>
                <View style={styles.totalAmountStyle}>
                    <View style={styles.totalAmountLabelStyle}>
                        <Text>Total Amount</Text>
                    </View>
                    <View>
                        <Text>{ (this.state.totalPrice).toFixed(3) }</Text>
                        <Text>JPY</Text>
                    </View>
                </View>
                <View>
                    <ScrollView>
                        { this.onRenderFolioCoins() }
                        <Button onPress={Actions.addTransactionModal}>
                            Add Transaction
                        </Button>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        flex: 1
    },
    totalAmountStyle: {

    },
    totalAmountLabelStyle: {

    },
    totalAmountLabelTextStyle: {
        fontSize: 20
    }
};

const mapStateToProps = ({ portfolio }) => {
    const { transactions } = portfolio;
    return { transactions };
}

export default connect(mapStateToProps, {})(MyPortfolio);
