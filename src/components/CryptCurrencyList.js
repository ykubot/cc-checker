import React, { Component } from 'react';
import { ScrollView, View, Text, Platform } from 'react-native';
import ListItem from './ListItem';
import {
    BTC, ETH, ETC, LISK, FACT, AUGUR, RIPPLE, NEM, LTC, BCH
} from './CoinTypes';
import { FacebookAds } from 'expo';
import { PLACEMENT_ID_IOS, PLACEMENT_ID_ANDROID } from '../constants/FacebookAds';

class CryptCurrencyList extends Component {

    render() {
        return(
            <View>
                <ScrollView>
                    <View style={styles.containerStyle}>
                        <ListItem coin={BTC} />
                        <ListItem coin={ETH} />
                        <ListItem coin={ETC} />
                        <ListItem coin={LISK} />
                        <ListItem coin={FACT} />
                        <ListItem coin={AUGUR} />
                        <ListItem coin={RIPPLE} />
                        <ListItem coin={NEM} />
                        <ListItem coin={LTC} />
                        <ListItem coin={BCH} />
                    </View>
                </ ScrollView>

            </View>
        );
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        // paddingBottom: 50
    },
    banner: {
        position: 'absolute',
        bottom: 20
    }
}

export default CryptCurrencyList;
