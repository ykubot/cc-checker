import React, { Component } from 'react';
import { View, Text, Image, TouchableWithoutFeedback, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
    onRenderIcon,
    convertCoinName,
    exchangeRateAmount
} from '../utils/coin';

class FolioListItem extends Component {
    constructor(props) {
        super(props);
        // console.log(this.props);
        this.state = {
            coin: this.props.coin,
            jpy_price: 0
        }
    }

    componentWillMount() {
        // console.log(this.props.coin);
        // console.log(this.state.coin);
        AsyncStorage.getItem(this.props.coin, (error, result) => {
            if (result) {
                this.setState({
                    jpy_price: exchangeRateAmount(this.props.amount, JSON.parse(result).jpy_rate || 1)
                });
                // console.log(JSON.parse(result));
            }
        });
    }

    onRowPress() {
        // console.log(this.state.coin);
        Actions.transactionList({
            coin: this.state.coin
        });
    }

    render() {
        return(
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View style={styles.containerStyle}>
                    <View>
                        { onRenderIcon(this.props.coin) }
                    </View>

                    <View>
                        <Text style={styles.titleStyle}>
                            { convertCoinName(this.props.coin) }
                        </Text>
                    </View>

                    <View style={styles.ratesStyle}>
                        <View style={styles.rateStyle}>
                            <Text style={styles.rateTextStyle}>
                                { this.state.jpy_price }
                            </Text>
                            <Text style={styles.unitTextStyle}>JPY</Text>
                        </View>
                        <View style={styles.rateStyle}>
                            <Text style={styles.rateTextStyle}>
                                {this.props.amount}
                            </Text>
                            <Text style={styles.unitTextStyle}>
                                {this.props.coin}
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

export default FolioListItem;
