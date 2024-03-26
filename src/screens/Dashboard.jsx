import { View, Text, Button } from 'react-native'

function Dashboard({ navigation }) {

    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
            title='Take a Ride'
            onPress={() => navigation.navigate("Pickup")}
        />
    </View>
}

export default Dashboard

/* 
Navigation k every "child_Component" me
humen props me "navigation" receive hoga
jis k through 1 page sy 2ndpage "navigate" 
kr sakty hen

*/
