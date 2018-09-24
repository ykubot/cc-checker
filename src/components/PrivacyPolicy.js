import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

const PrivacyPolicy = () => {
    return(
        <View>
            <ScrollView>
                <View style={styles.containerStyle}>
                    <View style={styles.bodyContainerStyle}>
                        <Text style={styles.bodyTextStyle}>
                            以下のとおり個人情報保護方針を定め、個人情報保護の仕組みを構築し、個人情報保護の重要性の認識と取組みを徹底することにより、個人情報の保護を推進致します。
                        </Text>
                    </View>

                    <View style={styles.headerContainerStyle}>
                        <Text style={styles.headerTextStyle}>
                            個人情報の管理
                        </Text>
                    </View>
                    <View style={styles.bodyContainerStyle}>
                        <Text style={styles.bodyTextStyle}>
                            お客さまの個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、セキュリティシステムの維持・管理体制の整備徹底等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行ないます。
                        </Text>
                    </View>

                    <View style={styles.headerContainerStyle}>
                        <Text style={styles.headerTextStyle}>
                            個人情報の利用目的
                        </Text>
                    </View>
                    <View style={styles.bodyContainerStyle}>
                        <Text style={styles.bodyTextStyle}>
                            お客さまからお預かりした個人情報は、サービス機能の提供および品質向上に活用いたします。
                        </Text>
                    </View>

                    <View style={styles.headerContainerStyle}>
                        <Text style={styles.headerTextStyle}>
                            個人情報の第三者への開示・提供の禁止
                        </Text>
                    </View>
                    <View style={styles.bodyContainerStyle}>
                        <Text style={styles.bodyTextStyle}>
                            お客さまよりお預かりした個人情報を適切に管理し、次のいずれかに該当する場合を除き、個人情報を第三者に開示いたしません。
                            * お客さまの同意がある場合
                            * お客さまが希望されるサービスを行なうために当社が業務を委託する業者に対して開示する場合
                            * 法令に基づき開示することが必要である場合
                        </Text>
                    </View>

                    <View style={styles.headerContainerStyle}>
                        <Text style={styles.headerTextStyle}>
                            個人情報の安全対策
                        </Text>
                    </View>
                    <View style={styles.bodyContainerStyle}>
                        <Text style={styles.bodyTextStyle}>
                            個人情報の正確性及び安全性確保のために、セキュリティに万全の対策を講じています。
                        </Text>
                    </View>

                    <View style={styles.headerContainerStyle}>
                        <Text style={styles.headerTextStyle}>
                            ご本人の照会
                        </Text>
                    </View>
                    <View style={styles.bodyContainerStyle}>
                        <Text style={styles.bodyTextStyle}>
                            お客さまがご本人の個人情報の照会・修正・削除などをご希望される場合には、ご本人であることを確認の上、対応させていただきます。
                        </Text>
                    </View>

                    <View style={styles.headerContainerStyle}>
                        <Text style={styles.headerTextStyle}>
                            法令、規範の遵守と見直し
                        </Text>
                    </View>
                    <View style={styles.bodyContainerStyle}>
                        <Text style={styles.bodyTextStyle}>
                            保有する個人情報に関して適用される日本の法令、その他規範を遵守するとともに、本ポリシーの内容を適宜見直し、その改善に努めます。
                        </Text>
                    </View>

                </View>
            </ScrollView>
        </View>
    );
};

const styles = {
    containerStyle: {
        flex: 1,
        flexDirection: 'column',
        padding: 10
    },
    headerContainerStyle: {
        paddingTop: 20
    },
    headerTextStyle: {
        fontSize: 18
    },
    bodyContainerStyle: {
        paddingTop: 8
    },
    bodyTextStyle: {
        fontSize: 14
    }
}

export default PrivacyPolicy;
