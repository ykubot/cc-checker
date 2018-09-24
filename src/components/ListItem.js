import React, { Component } from 'react';
import { View, Text, Image, TouchableWithoutFeedback, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Spinner } from './common';
import {
    BTC, ETH, ETC, LISK, FACT, AUGUR, RIPPLE, NEM, LTC, BC
} from '../constants/CoinTypes';
import {
    BASE_COLOR,
    UP_COLOR,
    DOWN_COLOR
} from '../constants/Colors';
import {
    onRenderIcon,
    compareRate,
    convertCoinName
} from '../utils/coin';
import {
    getCoinRate,
    setCoinRate,
    clearStorage
} from '../utils/AsyncStorage';
import {
    convertDisplayNumber
} from '../utils/utilities';

class ListItem extends Component {

    constructor(props) {
        super(props);
        // console.log(this.props.coin);
        this.state = {
            isLoading: true,
            backgroundColor: BASE_COLOR,
            name: this.props.coin,
            jpy_rate: '0',
            btc_rate: '0'
        }

        this.coinsFetch = this.coinsFetch.bind(this);
        this.onFetchSuccess = this.onFetchSuccess.bind(this);
        this.compareRate = compareRate.bind(this);
        this.onRowPress = this.onRowPress.bind(this);
    }

    componentWillMount() {
        // clearStorage();
        this.coinsFetch(this.props.coin);
    }

    componentDidMount() {
        // 15秒ごとに値を更新
        // this.interval = setInterval(() => {
        //     this.coinsFetch(this.props.coin);
        // }, 10000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    coinsFetch(coin) {
        const apiUrl = "https://coincheck.com/api/rate/";
        fetch(`${apiUrl}${coin}_jpy`)
            .then((response) => response.status == 200 ? response.json() : false)
            .then((responseData) => {
                if(!responseData) {
                    this.setState({
                        isLoading: false,
                    });
                    return;
                };
                // console.log('JPY Rate:');
                let jpy_rate = responseData.rate;
                if (coin !== 'btc') {
                    fetch(`${apiUrl}${coin}_btc`)
                        .then((response) => response.status == 200 ? response.json() : false)
                        .then((responseData) => {
                            if(!responseData) {
                                this.setState({
                                    isLoading: false,
                                });
                                return;
                            };
                            
                            // console.log('BTC Rate:');
                            let coinRate = {
                                jpy_rate: jpy_rate ? jpy_rate : 0,
                                btc_rate: responseData ? responseData.rate : 0,
                            };
                            this.onFetchSuccess(coin, coinRate);
                        });
                } else {
                    let coinRate = {
                        jpy_rate: jpy_rate ? jpy_rate : 0
                    };
                    this.onFetchSuccess(coin, coinRate);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    onFetchSuccess(coin, coinRate) {
        let oldRate = this.state.jpy_rate;
        if(!coinRate) return;

        switch(coin) {
            case BTC:
                this.setState({
                    isLoading: false,
                    backgroundColor: this.compareRate(oldRate, coinRate.jpy_rate),
                    jpy_rate: coinRate.jpy_rate
                });

                setCoinRate(coin, {coin: coin, jpy_rate: parseFloat(coinRate.jpy_rate), btc_rate: 1 });
                setTimeout(() => {
                    this.setState({ backgroundColor: BASE_COLOR });
                }, 500);
            default:
                this.setState({
                    isLoading: false,
                    backgroundColor: this.compareRate(oldRate, coinRate.jpy_rate),
                    jpy_rate: coinRate.jpy_rate,
                    btc_rate: coinRate.btc_rate
                });

                setCoinRate(coin, {coin: coin, jpy_rate: parseFloat(coinRate.jpy_rate), btc_rate: parseFloat(coinRate.btc_rate)});
                setTimeout(() => {
                    this.setState({ backgroundColor: BASE_COLOR });
                }, 500);
        }
    }

    onRowPress() {
        Actions.cryptCurrencyDetail({
            title: convertCoinName(this.state.name),
            coin: convertCoinName(this.state.name),
            unit: (this.state.name).toUpperCase(),
            jpy_rate: parseFloat(this.state.jpy_rate).toString(),
            btc_rate: parseFloat(this.state.btc_rate).toString()
        });
    }

    render() {
        if (this.state.isLoading || !this.state.name) {
            return (
                <View style={styles.containerStyle}>
                    <Spinner size='small'/>
                </View>
            );
        }

        if (this.props.coin === 'btc') {
            return(
                <TouchableWithoutFeedback onPress={this.onRowPress}>
                    <View style={[styles.containerStyle, { backgroundColor: `${this.state.backgroundColor}` }]}>
                        <View>
                            { onRenderIcon(this.props.coin) }
                        </View>

                        <View>
                            <Text style={styles.titleStyle}>
                                { convertCoinName(this.state.name) }
                            </Text>
                        </View>

                        <View style={styles.ratesStyle}>
                            <View style={styles.rateStyle}>
                                <Text style={styles.rateTextStyle}>
                                    {/* { parseFloat(this.state.jpy_rate).toFixed(3) } */}
                                    { convertDisplayNumber(this.state.jpy_rate) }
                                </Text>
                                <Text style={styles.unitTextStyle}>JPY</Text>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            );
        }

        return(
            <TouchableWithoutFeedback onPress={this.onRowPress}>
                <View style={[styles.containerStyle, { backgroundColor: `${this.state.backgroundColor}` }]}>
                    <View>
                        { onRenderIcon(this.props.coin) }
                    </View>

                    <View>
                        <Text style={styles.titleStyle}>
                            { convertCoinName(this.state.name) }
                        </Text>
                    </View>

                    <View style={styles.ratesStyle}>
                        <View style={styles.rateStyle}>
                            <Text style={styles.rateTextStyle}>
                                {/* { parseFloat(this.state.jpy_rate).toFixed(3) } */}
                                { convertDisplayNumber(this.state.jpy_rate) }
                            </Text>
                            <Text style={styles.unitTextStyle}>JPY</Text>
                        </View>
                        <View style={styles.rateStyle}>
                            <Text style={styles.rateTextStyle}>
                                {/* { this.state.btc_rate } */}
                                { convertDisplayNumber(this.state.btc_rate) }
                            </Text>
                            <Text style={styles.unitTextStyle}>BTC</Text>
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
    // iconStyle: {
    //     width: 30,
    //     height: 30
    // },
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
};

export default ListItem;
