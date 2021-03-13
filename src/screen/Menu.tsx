import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';

export default function Menu() {

    return (
        <SafeAreaView style={styles.container}>
            <WebView style={styles.webView} source={{ uri: 'https://www.restaurangbasta.se/wp-content/uploads/2021/02/WebsiteMenu-Gavle.pdf' }} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    webView: {
        height: '100%',
        width: '100%'
    }
});