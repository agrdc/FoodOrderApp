import React, { useState, useReducer, useEffect } from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import * as Location from 'expo-location'

const screenHeight = Dimensions.get('screen').height
const screenWidth = Dimensions.get('screen').width


export const InitialScreen = () => {

    const [errorMessage, setErrorMessage] = useState("")
    // const [address, setAddress] = useState<Location.LocationGeocodedAddress>()
    const [address, setAddress] = useState("Waiting for user location")

    useEffect(() => {
        (async () => {
            let { granted }  = await Location.requestForegroundPermissionsAsync()
            if (granted === false) {
                setErrorMessage("Location permission not granted")    
            } else {
                let {coords} = await Location.getCurrentPositionAsync()
                if (coords != null) {
                    const { latitude, longitude } = coords;
                    let addresses = await Location.reverseGeocodeAsync({latitude, longitude})
                    for (let item of addresses) {
                        const address = `${item.name}, ${item.street}, ${item.postalCode}, ${item.country} `
                        setAddress(address)
                    }
                }
            }
        })();
    })


    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <Image source={require('../images/delivery_icon.png')} style={styles.deliveryIcon} />
                <Text style={styles.textTitle}>Your delivery address</Text>
                <View style={styles.addressContainer} />
                <Text style={styles.textSubtitle}>{address}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
    },
    deliveryIcon: {
        marginBottom: 4,
        width: 120,
        height: 120
    },
    body: {
        flex: 9,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    addressContainer: {
        width: screenWidth - 100,
        height: 1,
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,
        marginTop: 2,
        marginBottom: 6,
        alignItems: 'center',
    },
    textTitle: {
        fontSize: 22,
        fontWeight: '700',
        color: 'black'
    },
    textSubtitle: {
        fontSize: 20,
        fontWeight: '200',
        color: 'black'
    },
    footer: {
        flex: 1,
        backgroundColor: 'purple',
        justifyContent: 'center',
        alignItems: 'center',
    },
})