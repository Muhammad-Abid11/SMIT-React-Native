import { View, Text, Button } from 'react-native'

function Pickup({ navigation }) {

    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <Button
            title='Select Destination'
            onPress={() => navigation.navigate("Destination")}
        />
    </View>
}

export default Pickup

/* 
Navigation k every "child_Component" me
humen props me "navigation" receive hoga
jis k through 1 page sy 2ndpage "navigate" 
kr sakty hen

*/
