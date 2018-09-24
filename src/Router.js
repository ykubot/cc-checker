import React from 'react';
import { Text, Platform } from 'react-native';
import { Router, Scene, Stack, Actions } from 'react-native-router-flux';
import CryptCurrencyList from './components/CryptCurrencyList';
import CryptCurrencyDetail from './components/CryptCurrencyDetail';
import TabIcon from './components/TabIcon';
import SettingsModal from './components/SettingsModal';
import PrivacyPolicy from './components/PrivacyPolicy';
import CloseButton from './components/common/CloseButton';
import SettingsButton from './components/common/SettingsButton';
import {HEADER_HEIGHT_IOS, HEADER_HEIGHT_ANDROID} from './constants/Constants';

const RouterComponent = () => {
    // navigationBarStyle={styles.navBarStyle} titleStyle={styles.titleStyle} sceneStyle={styles.sceneStyle}
    return(
        <Router navigationBarStyle={styles.navBarStyle} titleStyle={styles.titleStyle} sceneStyle={styles.sceneStyle}>
            <Stack key="root">
                <Scene
                    key="cryptCurrencyList"
                    component={CryptCurrencyList}
                    title="CC Checker"
                    renderRightButton={() => <SettingsButton />}
                    hideNavBar={false}
                    initial={true}
                    icon={TabIcon}
                    sceneStyle={styles.sceneStyle}
                />
                <Scene
                    key="cryptCurrencyDetail"
                    component={CryptCurrencyDetail}
                    title="Coin Detail"
                    sceneStyle={styles.sceneStyle}
                />

                <Scene
                    key="settingsModal"
                    direction="vertical"
                    renderBackButton={() => <CloseButton />}
                    component={SettingsModal}
                    schema="modal"
                    title="Settings"
                    navigationBarStyle={styles.navBarStyle}
                    sceneStyle={styles.sceneStyle}
                    titleStyle={styles.titleStyle}
                >
                </Scene>
                <Scene
                    key="privacyPolicy"
                    component={PrivacyPolicy}
                    title="Privacy Policy"
                    navigationBarStyle={styles.navBarStyle}
                    sceneStyle={styles.sceneStyle}
                    titleStyle={styles.titleStyle}
                />
            </Stack>
        </Router>
    );
};

const styles = {
    navBarStyle: {
        flex: 1,
        backgroundColor: '#00B7C3',
        paddingTop: Platform.select({
            ios: 0,
            android: 20
        }),
        height: Platform.select({
            ios: HEADER_HEIGHT_IOS,
            android: HEADER_HEIGHT_ANDROID
        }),
    },
    titleStyle: {
        color: '#FFFFFF'
    },
    sceneStyle: {
        // paddingTop: Platform.select({
        //     ios: HEADER_HEIGHT_IOS,
        //     android: HEADER_HEIGHT_ANDROID
        // }),
    }
}

export default RouterComponent;
