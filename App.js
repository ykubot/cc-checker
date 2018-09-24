import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Router from './src/Router';
import reducers from './src/reducers';

export default class App extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.safeArea}>
              <Router />
            </SafeAreaView>
        );
    }
}

const styles = {
  safeArea: {
    flex: 1,
    backgroundColor: '#4DD0E1'
  }
}