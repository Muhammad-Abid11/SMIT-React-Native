// class 5
// https://docs.expo.dev/versions/latest/sdk/map-view/
// npx expo install react-native-maps

// https://docs.expo.dev/versions/latest/sdk/location/
// npx expo install expo-location

import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import * as Location from "expo-location"

import { useEffect } from 'react';
import { useState } from 'react';

export default function ExpoMap() {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    useEffect(() => {
        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    if (!location) {
        return <Text>{errorMsg || "Location needs permission"}</Text>
    }
    // console.log("location-->", location.coords)
    return (
        <View style={styles.container}>
            <Text>ExpoMap</Text>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.00009,
                    longitudeDelta: 0.0009 //0 k kareb means zoom in
                }}
            >
                {
                    <Marker
                        draggable
                        coordinate={{
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude,
                        }}
                        title={"My Location"}
                        description={"This is Description"}
                    />
                }
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});