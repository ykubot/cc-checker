import { AsyncStorage } from 'react-native';

export async function clearStorage() {
    await AsyncStorage.clear((err) => {
        console.log(err);
    });
};

export async function getCoinRate(coin) {
    let response = await AsyncStorage.getItem(`${coin}`);
    // console.log(JSON.parse(response));
    return JSON.parse(response);
};

export async function getTransactionList() {
    let response = await AsyncStorage.getItem('transactions');
    return JSON.parse(response)
};

export async function setCoinRate(coin, rates) {
    await AsyncStorage.setItem(`${coin}`, JSON.stringify(rates));
    // console.log(JSON.stringify(rates));
};
