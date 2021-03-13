import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Browser from './Browser'

const Stack = createStackNavigator();

export default function Home() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeContent} />
            <Stack.Screen name="Borlänge" component={Browser} />
            <Stack.Screen name="Falun" component={Browser} />
            <Stack.Screen name="Gävle" component={Browser} />
            <Stack.Screen name="Sundsvall" component={Browser} />
        </Stack.Navigator>
    );
}

function HomeContent({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Borlänge', { URL: 'https://app.waiteraid.com/reservation/?app_type=bokabord&hash=e0026b28bb62f45cd5dbaddcfe11c25e&gaci=' })}
            >
                <Text style={styles.buttonText}>Borlänge</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Falun', { URL: 'https://app.waiteraid.com/reservation/?app_type=bokabord&hash=4832709608566c0139d8caf4ab487e22&gaci=' })}
            >
                <Text style={styles.buttonText}>Falun</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Gävle', { URL: 'https://app.waiteraid.com/reservation/?app_type=bokabord&hash=f6dbbb53f2cbbafdf35e3b82115d411a&gaci=' })}
            >
                <Text style={styles.buttonText}>Gävle</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Sundsvall', { URL: 'https://app.waiteraid.com/reservation/?app_type=bokabord&hash=0ba1ca8298a0fd3bd5bd4eff2b961396&gaci=' })}
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