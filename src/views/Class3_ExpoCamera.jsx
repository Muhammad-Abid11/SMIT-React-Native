// npx expo install expo-camera
//https://docs.expo.dev/versions/latest/sdk/camera/

// npx expo install expo-media-library
// https://docs.expo.dev/versions/latest/sdk/media-library/
// To save data in media

import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';

import { useState, useEffect, useRef } from 'react';
import { Image, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Class3_ExpoCamera() {
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();

    const [image, setImage] = useState()
    const [permissionResponseMedia, requestPermissionMedia] = MediaLibrary.usePermissions();
    const cameraRef = useRef()

    useEffect(() => {
        requestPermissionMedia();
    }, [])

    if (!permission) {
        // Camera permissions are still loading
        return <Text>No permission</Text>;
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet
        return (
            <View style={styles.container}>
                <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }

    const toggleCameraType = () => {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }

    //google
    const snapPicture = async () => {
        const photo = await cameraRef.current.takePictureAsync()
        setImage(photo)

        if (permissionResponseMedia.granted) {
            await MediaLibrary.saveToLibraryAsync(photo.uri)
            alert('saved to gallery!')
        }
    }

    return (
        <View style={styles.container}>
            {image
                ?
                <View>
                    <Image source={{ uri: image.uri }}
                        style={{ width: '100%', height: '80%' }} />
                    <Button title="Take Picture" onPress={() => setImage(null)} />
                </View>
                :
                <Camera style={styles.camera} type={type} ref={cameraRef}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
                            <Text style={styles.text}>Flip Camera</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button} onPress={snapPicture}>
                            <Image
                                style={styles.icon}
                                source={{ uri: 'https://static-00.iconduck.com/assets.00/snap-icon-2048x2048-hs6u6g2k.png' }} />
                        </TouchableOpacity>

                    </View>
                </Camera>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 64,
    },
    button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    icon: {
        width: 100,
        height: 100
    }
});

//Upper code copied from expo
//To saveImage we should use "useRef" hooks for the refrence of "cameraPicture" detail