import { View, Text, Button } from 'react-native'

function Chats({ navigation }) {
    return <View>
        <Text>Here Chats will come</Text>
        <Button
            title='Goto Calls'
            onPress={() => navigation.navigate("Calls")}
        />
    </View>
}

export default Chats