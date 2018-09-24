import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    AsyncStorage
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import TransactionListItem from './TransactionListItem';
import { Button } from './common';

class TransactionList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            selectedCoin: this.props.coin,
            totalAmount: 0,
            totalPrice: 0,
            transactions: [],
            folioCoins: []
        }
    }

    componentWillMount() {
        // console.log(this.state.selectedCoin);
        // console.log(this.state.transactions);
        this._loadTransactions(this.state.selectedCoin);
    }

    onRenderTransactions() {
        if (this.state.transactions){
            // console.log(this.state.transactions);
            return this.state.transactions.map((transaction, key) => <TransactionListItem key={key} transaction={transaction} />);
        }
    }

    _loadTransactions(selectedCoin) {
        AsyncStorage.getItem('transactions', (error, response) => {
            let transactions = JSON.parse(response);
            // this.setState({ transactions: transactions || [] });
            let coinSums = {};
            let coinTransactions = [];
            if (transactions) {
                transactions.forEach((transaction, index) => {
                    if (transaction.coin === selectedCoin) {
                        coinTransactions.push(transaction);
                        if (transaction.type === 'buy') {
                            coinSums[selectedCoin] = (coinSums[selectedCoin] || 0) + transaction.amount;
                        } else if (transaction.type === 'sell') {
                            coinSums[selectedCoin] = (coinSums[selectedCoin] || 0) - transaction.amount;
                        }
                    }
                });
                this.setState({transactions: coinTransactions});
                this.setState({totalAmount: coinSums[selectedCoin]});
            }
        });
    }

    async _convertTotalPrice(coin, amount) {
        let sum_jpy_price = 0;
        await AsyncStorage.getItem(coin, (error, response) => {
            if (response) {
                coin_rate = JSON.parse(response);
                sum_jpy_price = coin_amount.amount * parseFloat(coin_rate.jpy_rate);
            }
        });
        this.setState({totalPrice: sum_jpy_price});
    }

    render() {
        return(
            <View style={styles.containerStyle}>
                <View style={styles.totalAmountStyle}>
                    <View style={styles.totalAmountLabelStyle}>
                        <Text>Amount</Text>
                    </View>
                    <View>
                        <Text>{ (this.state.totalPrice).toFixed(3) }</Text>
                        <Text>JPY</Text>
                    </View>
                    <View>
                        <Text>{ this.state.totalAmount }</Text>
                        <Text>{ this.state.selectedCoin }</Text>
                    </View>
                </View>
                <View>
                    <ScrollView>
                        { this.onRenderTransactions() }
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

export default TransactionList;
