import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';

export default function Home({ route }) {

    const { URL } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <WebView style={styles.webView} source={{ uri: URL }} />
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