import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}>
            <Button title="Borlänge" onPress={() => Alert.alert('Button with adjusted color pressed')}
                color="#841584" />
            <Button title="Falun" onPress={() => Alert.alert('Button with adjusted color pressed')}
                color="#841584" />
            <Button title="Gävle" onPress={() => Alert.alert('Button with adjusted color pressed')}
                color="#841584" />
            <Button title="Sundsvall" onPress={() => Alert.alert('Button with adjusted color pressed')}
                color="#841584" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16
    }
});