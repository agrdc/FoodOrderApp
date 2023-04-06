import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export const InitialScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.navigation}>
                <Text> Navigation </Text>
            </View>
            <View style={styles.body}>
                <Text> Body </Text>
            </View>
            <View style={styles.footer}>
                <Text> Footer </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
    },
    navigation: {
        flex: 2,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    body: {
        flex: 9,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        flex: 1,
        backgroundColor: 'purple',
        justifyContent: 'center',
        alignItems: 'center',
    },
})