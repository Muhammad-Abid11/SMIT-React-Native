// https://reactnavigation.org/docs/getting-started/
// npm install @react-navigation/native
// npx expo install react-native-screens react-native-safe-area-context

//https://reactnavigation.org/docs/hello-react-navigation
// npm install @react-navigation/native-stack

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Chats from '../screens/Chats'
import Calls from '../screens/Calls'

import CarSelection from '../screens/CarSelection'
import Dashboard from '../screens/Dashboard'

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Dashboard" component={Dashboard} />
                <Stack.Screen name="Chats" component={Chats} />
                <Stack.Screen name="Calls" component={Calls} />

                <Stack.Screen name="CarSelection" component={CarSelection} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

/* 
3 type of Navigation
    i.Stack
   ii.Tab
  iii.Drawer

*/