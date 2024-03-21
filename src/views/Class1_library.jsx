import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { NativeBaseProvider, Box } from "native-base";
import { Button, Heading } from "native-base";

export default function App() {
    return (
        <View style={styles.container}>
            <NativeBaseProvider >
                <ScrollView>

                    <Button onPress={() => console.log("hello world")}>Click Me</Button>
                    <Text>{'\n'}Hello world{'\n'}</Text>

                    <Heading size="lg">Solids Buttons</Heading>
                    <Button size="sm" colorScheme="secondary">SECONDARY</Button>
                    <Button size="sm" isDisabled>DISABLED</Button>
                    <Text> {'\n'}</Text>

                    <Heading size="md">Subtle</Heading>
                    <Button size="sm" variant="subtle">PRIMARY</Button>
                    <Button size="sm" variant="subtle" isDisabled>DISABLED</Button>

                    <Text> {'\n'}</Text>
                    <Heading size="md">Outline Buttons</Heading>
                    <Button size="sm" variant="outline" colorScheme="secondary">SECONDARY</Button>
                    <Button size="sm" variant="outline" isDisabled>DISABLED</Button>

                    <Text> {'\n'}</Text>
                    <Heading size="md">Link</Heading>
                    <Button size="sm" variant="link" colorScheme="secondary">SECONDARY</Button>
                    <Button size="sm" variant="link" isDisabled>DISABLED</Button>

                    <Text> {'\n'}</Text>
                    <Heading size="md">Ghost</Heading>
                    <Button size="sm" variant="ghost" colorScheme="secondary">
                        SECONDARY
                    </Button>
                    <Button size="sm" variant="ghost" isDisabled>
                        DISABLED
                    </Button>

                    {/* https://docs.nativebase.io/button */}
                </ScrollView>
            </NativeBaseProvider>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});
