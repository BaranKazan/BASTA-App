import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
    return (
        <SafeAreaView style={styles.container}>

            <TouchableOpacity
                style={styles.button}
                onPress={() => Alert.alert('Button with adjusted color pressed')}
            >
                <Text style={styles.buttonText}>Borlänge</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => Alert.alert('Button with adjusted color pressed')}
            >
                <Text style={styles.buttonText}>Falun</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => Alert.alert('Button with adjusted color pressed')}
            >
                <Text style={styles.buttonText}>Gävle</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => Alert.alert('Button with adjusted color pressed')}
            >
                <Text style={styles.buttonText}>Sundsvall</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16
    },
    button: {
        alignItems: "center",
        backgroundColor: "#192034",
        padding: 10,
        borderRadius: 20,
        marginTop: 10,
        marginBottom: 10
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 20
    },
});