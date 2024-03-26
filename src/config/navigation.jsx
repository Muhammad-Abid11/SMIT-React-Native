// https://reactnavigation.org/docs/getting-started/
// npm install @react-navigation/native
// npx expo install react-native-screens react-native-safe-area-context

//https://reactnavigation.org/docs/hello-react-navigation
// npm install @react-navigation/native-stack

// https://reactnavigation.org/docs/material-top-tab-navigator/
// npm install @react-navigation/material-top-tabs react-native-tab-view

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Chats from '../screens/Chats'
import Calls from '../screens/Calls'
import Status from '../screens/Status'

import Dashboard from '../screens/Dashboard'
import Pickup from '../screens/Pickup'
import Destination from '../screens/Destination'
import CarSelection from '../screens/CarSelection'

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

export default function MainNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="TabNavi" component={MyTabs} />
                {/* To see StackNavigation comment "TabNavi" line */}
                <Stack.Screen name="Dashboard" component={Dashboard} />
                <Stack.Screen name="Pickup" component={Pickup} />
                <Stack.Screen name="Destination" component={Destination} />
                <Stack.Screen name="CarSelection" component={CarSelection} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Chats" component={Chats} />
            <Tab.Screen name="Calls" component={Calls} />
            <Tab.Screen name="Status" component={Status} />
        </Tab.Navigator>
    );
}


/* 
3 type of Navigation
    i.Stack
   ii.Tab
  iii.Drawer

*/