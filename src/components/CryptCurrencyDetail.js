import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { connect } from 'react-redux';
import { priceInitialized, coinPriceChanged, jpyPriceChanged, btcPriceChanged } from '../actions';
import { Input } from './common';
import { FacebookAds } from 'expo';
import { PLACEMENT_ID_IOS, PLACEMENT_ID_ANDROID } from '../constants/FacebookAds';
import { convertDisplayNumber, toPlainValue } from '../utils/utilities';

class CryptCurrencyDetail extends Component {

    componentWillMount() {
        // this.priceInitialized = this.props.priceInitialized.bind(this);
        this.props.priceInitialized();
    }

    onCoinPriceChange(price) {
        // console.log(price);
        this.props.coinPriceChanged(price);
        this.props.jpyPriceChanged(convertDisplayNumber(this.exchangeCoinToJpy(price)));
        this.props.btcPriceChanged(convertDisplayNumber(this.exchangeCoinToBtc(price)));
    }

    onJpyPriceChange(price) {
        // console.log(price);
        this.props.jpyPriceChanged(price);
        this.props.coinPriceChanged(convertDisplayNumber(this.exchangeJpyToCoin(price)));
        this.props.btcPriceChanged(convertDisplayNumber(this.exchangeJpyToBtc(price)));
    }

    onBtcPriceChange(price) {
        // console.log(price);
        this.props.btcPriceChanged(price);
        this.props.coinPriceChanged(convertDisplayNumber(this.exchangeBtcToCoin(price)));
        this.props.jpyPriceChanged(convertDisplayNumber(this.exchangeBtcToJpy(price)));
    }

    // Coin => Jpy
    exchangeCoinToJpy(price) {
        return price > 0 ? parseFloat(price * this.props.jpy_rate).toString() : "0";
    }

    // Jpy => Coin
    exchangeJpyToCoin(price) {
        // console.log(toPlainValue(price / this.props.jpy_rate));
        return price > 0 ? parseFloat(price / this.props.jpy_rate).toString() : "0";
    }

    // Coin => Btc
    exchangeCoinToBtc(price) {
        return price > 0 ? parseFloat(price * this.props.btc_rate).toString() : "0";
    }

    // Jpy => Btc
    exchangeJpyToBtc(price) {
        return price > 0 ? parseFloat((price / this.props.jpy_rate) * this.props.btc_rate).toString() : "0";
    }

    // Btc => Coin
    exchangeBtcToCoin(price) {
        return price > 0 ? parseFloat(price / this.props.btc_rate).toString() : "0";
    }

    // Btc => Jpy
    exchangeBtcToJpy(price) {
        return price > 0 ? parseFloat((price / this.props.btc_rate) * this.props.jpy_rate).toString() : "0";
    }

    render() {
        return(
            <View style={styles.containerStyle}>
                <Input
                    label={this.props.unit}
                    placeholder="0.0"
                    onChangeText={this.onCoinPriceChange.bind(this)}
                    value={this.props.coin_price}
                />

                <Input
                    label="JPY"
                    placeholder="0.0"
                    onChangeText={this.onJpyPriceChange.bind(this)}
                    value={this.props.jpy_price}
                />

                {
                    (this.props.unit !== 'BTC') &&
                    <Input
                        label="BTC"
                        placeholder="0.0"
                        onChangeText={this.onBtcPriceChange.bind(this)}
                        value={this.props.btc_price}
                    />
                }

            </View>
        );
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        backgroundColor: '#00B7C3',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        paddingBottom: 50
    },
    banner: {
      position: 'absolute',
      bottom: 20
  }
}

const mapStateToProps = ({ cryptCurrency }) => {
    const { coin_price, jpy_price, btc_price } = cryptCurrency;

    return { coin_price, jpy_price, btc_price };
}

export default connect(mapStateToProps, {
    priceInitialized,
    coinPriceChanged,
    jpyPriceChanged,
    btcPriceChanged
})(CryptCurrencyDetail);
