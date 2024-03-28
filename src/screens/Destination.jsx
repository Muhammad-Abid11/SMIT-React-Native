import { View, Text, Button } from 'react-native'

function Destination({ navigation }) {

    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
            title='Select a car'
            onPress={() => navigation.navigate("CarSelection")}
        />
        <Text>{"\n"}</Text>
        <Button
            title="Open Map"
            onPress={() => navigation.navigate("ExpoMap")}
        />
        <Text>{"\n"}</Text>
        <Button
            title="Go back"
            onPress={() => navigation.goBack()}
        />
        <Text>{"\n"}</Text>

        <Button
            title="Go back to first screen in stack"
            onPress={() => navigation.popToTop()}
        />
    </View>
}

export default Destination

/* 
Navigation k every "child_Component" me
humen props me "navigation" receive hoga
jis k through 1 page sy 2ndpage "navigate" 
kr sakty hen

*/
