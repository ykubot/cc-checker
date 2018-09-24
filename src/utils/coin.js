import React from 'react';
import {
    Image
} from 'react-native';
import {
    BTC, ETH, ETC, LISK, FACT, MONERO, AUGUR, RIPPLE, ZCASH, NEM, LTC, DASH, BCH
} from '../constants/CoinTypes';
import {
    BASE_COLOR,
    UP_COLOR,
    DOWN_COLOR
} from '../constants/Colors';


export const compareRate = (oldRate, nextRate) => {
    if (nextRate == 0 || nextRate == oldRate) {
        return BASE_COLOR;
    }
    return (nextRate > oldRate) ? UP_COLOR : DOWN_COLOR;
}

export const convertCoinName = (coin) => {
    switch (coin) {
        case BTC:
            return 'Bitcoin';
        case ETH:
            return 'Ethereum';
        case ETC:
            return 'Ethereum Classic';
        case LISK:
            return 'LISK';
        case FACT:
            return 'Factom';
        case MONERO:
            return 'Monero';
        case AUGUR:
            return 'Augur';
        case RIPPLE:
            return 'Ripple';
        case ZCASH:
            return 'Zcash';
        case NEM:
            return 'NEM';
        case LTC:
            return 'LTC';
        case DASH:
            return 'Dash';
        case BCH:
            return 'Bitcoin Cash';
    }
}

export const convertCoinUnit = (coin) => {
    switch (coin) {
        case BTC:
            return 'BTC';
        case ETH:
            return 'ETH';
        case ETC:
            return 'ETC';
        case LISK:
            return 'LSK';
        case FACT:
            return 'FCT';
        case MONERO:
            return 'XMR';
        case AUGUR:
            return 'REP';
        case RIPPLE:
            return 'XRP';
        case ZCASH:
            return 'ZEC';
        case NEM:
            return 'XEM';
        case LTC:
            return 'LTC';
        case DASH:
            return 'DASH';
        case BCH:
            return 'BCH';
    }
}

export const onRenderIcon = (coin) => {
    switch(coin) {
        case BTC:
            return (
                <Image
                    style={styles.iconStyle}
                    source={require('../../assets/coin-icons/png/icon_btc.png')}
                />
            );
        case ETH:
            return (
                <Image
                    style={styles.iconStyle}
                    source={require('../../assets/coin-icons/png/icon_eth.png')}
                />
            );
        case ETC:
            return (
                <Image
                    style={styles.iconStyle}
                    source={require('../../assets/coin-icons/png/icon_etc.png')}
                />
            );
        case LISK:
            return (
                <Image
                    style={styles.iconStyle}
                    source={require('../../assets/coin-icons/png/icon_lsk.png')}
                />
            );
        case FACT:
            return (
                <Image
                    style={styles.iconStyle}
                    source={require('../../assets/coin-icons/png/icon_fct.png')}
                />
            );
        case MONERO:
            return (
                <Image
                    style={styles.iconStyle}
                    source={require('../../assets/coin-icons/png/icon_xmr.png')}
                />
            );
        case AUGUR:
            return (
                <Image
                    style={styles.iconStyle}
                    source={require('../../assets/coin-icons/png/icon_rep.png')}
                />
            );
        case RIPPLE:
            return (
                <Image
                    style={styles.iconStyle}
                    source={require('../../assets/coin-icons/png/icon_xrp.png')}
                />
            );
        case ZCASH:
            return (
                <Image
                    style={styles.iconStyle}
                    source={require('../../assets/coin-icons/png/icon_zec.png')}
                />
            );
        case NEM:
            return (
                <Image
                    style={styles.iconStyle}
                    source={require('../../assets/coin-icons/png/icon_xem.png')}
                />
            );
        case LTC:
            return (
                <Image
                    style={styles.iconStyle}
                    source={require('../../assets/coin-icons/png/icon_ltc.png')}
                />
            );
        case DASH:
            return (
                <Image
                    style={styles.iconStyle}
                    source={require('../../assets/coin-icons/png/icon_dash.png')}
                />
            );
        case BCH:
            return (
                <Image
                    style={styles.iconStyle}
                    source={require('../../assets/coin-icons/png/icon_bch.png')}
                />
            );
    }
}

export const exchangeRateAmount = (price, rate) => {
    return price > 0 ? (price * rate).toFixed(3).toString() : "0";
}

const styles = {
    iconStyle: {
        width: 30,
        height: 30
    }
};
