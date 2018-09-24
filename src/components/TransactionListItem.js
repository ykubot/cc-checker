import React, { Component } from 'react';
import { View, Text, Image, TouchableWithoutFeedback, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
    onRenderIcon,
    convertCoinName,
    exchangeRateAmount
} from '../utils/coin';

class TransactionListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transaction: {},
        }
    }

    componentWillMount() {
        this.setState({transaction: this.props.transaction});
    }

    onRowPress() {
        console.log(this.state.transaction);
        Actions.transactionDetail({
            transactionId: this.state.transaction.transactionId,
            date: this.state.transaction.date,
            transactionType: this.state.transaction.transactionType,
            coin: this.state.transaction.coin,
            exchange: this.state.transaction.exchange,
            amount: this.state.transaction.amount,
            jpy_rate: this.state.transaction.jpy_rate,
            btc_rate: this.state.transaction.btc_rate
        });
    }

    render() {
        return(
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View style={styles.containerStyle}>
                    <View>
                        { onRenderIcon(this.state.transaction.coin) }
                    </View>

                    <View>
                        <Text style={styles.titleStyle}>
                            { convertCoinName(this.state.transaction.coin) }
                        </Text>
                    </View>

                    <View style={styles.ratesStyle}>
                        <View style={styles.rateStyle}>
                            <Text style={styles.rateTextStyle}>
                                { this.state.transaction.jpy_rate }
                            </Text>
                            <Text style={styles.unitTextStyle}>JPY</Text>
                        </View>
                        <View style={styles.rateStyle}>
                            <Text style={styles.rateTextStyle}>
                                {this.state.transaction.amount}
                            </Text>
                            <Text style={styles.unitTextStyle}>
                                {this.state.transaction.coin}
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        height: 60,
        borderBottomWidth: 1,
        padding: 12,
        backgroundColor: '#FFF',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#4DD0E1',
        position: 'relative'
    },
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    },
    ratesStyle: {
        marginLeft: 'auto'
    },
    rateStyle: {
        flex: 1,
        justifyContent: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center'
    },
    rateTextStyle: {
        fontSize: 15
    },
    unitTextStyle: {
        paddingLeft: 5,
        fontSize: 12,
        color: '#7f8c8d'
    }
}

export default TransactionListItem;
