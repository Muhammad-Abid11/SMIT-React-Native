import { View, Text, Button } from 'react-native'

function Dashboard({ navigation }) {

    return <View>
        <Text>Here Dashboard will come</Text>

        <Button
            title='Goto Chats'
            onPress={() => navigation.navigate("Chats")}
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
