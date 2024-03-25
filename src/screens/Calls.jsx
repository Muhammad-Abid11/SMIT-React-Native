import { Button, View, Text } from 'react-native'

function Calls({ navigation }) {
    return <View>
        <Text>Here Calls will come</Text>

        <Button
            title='Goto Car Selection'
            onPress={() => navigation.navigate("CarSelection")}
        />
    </View>
}

export default Calls