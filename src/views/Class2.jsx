import { Text, View, StyleSheet } from "react-native"
import { WebView } from 'react-native-webview';// npm i react-native-webview

export default function Class2() {
    return (
        <View style={styles.container}>
            <WebView
                style={styles.container}
                source={{ uri: 'https://www.google.com' }}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


/* 
By Sir Kashif Class 1
    Just Lectures
Class 2
    Todo-App
    WebView
*/
