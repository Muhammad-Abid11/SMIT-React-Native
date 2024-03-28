// https://reactnavigation.org/docs/getting-started/
// npm install @react-navigation/native
// npx expo install react-native-screens react-native-safe-area-context

//https://reactnavigation.org/docs/hello-react-navigation
// npm install @react-navigation/native-stack

// https://reactnavigation.org/docs/material-top-tab-navigator/
// npm install @react-navigation/material-top-tabs react-native-tab-view
//npm install react-native-pager-view

// https://reactnavigation.org/docs/drawer-navigator
// npm install @react-navigation/drawer
// npx expo install react-native-gesture-handler react-native-reanimated

// if you got any error from the library go to Documentation and check any npm package that was not missed 

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Chats from '../screens/Chats'
import Calls from '../screens/Calls'
import Status from '../screens/Status'

import Dashboard from '../screens/Dashboard'
import Pickup from '../screens/Pickup'
import Destination from '../screens/Destination'
import CarSelection from '../screens/CarSelection'

import Profile from '../screens/Profile'
import History from '../screens/History'

import ExpoMap from '../screens/ExpoMap';

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();


export default function MainNavigator() {
    return (
        <NavigationContainer>
            {/* <Drawer.Navigator initialRouteName="Feed" screenOptions={{ headerShown: false }}> */}
            <Drawer.Navigator initialRouteName="Profile" >
                <Drawer.Screen name="Feed" component={MyStack} options={{ drawerLabel: 'Home' }} />
                <Drawer.Screen name="Profile" component={Profile} />
                <Drawer.Screen name="History" component={History} />
            </Drawer.Navigator>
        </NavigationContainer>

    );
}

function MyStack() {
    return (
        // <NavigationContainer> //if you are not using "DrawerNavigator then uncomment it and export it"
        <Stack.Navigator >

            {/* <Stack.Screen name="TabNavi" component={MyTabs} /> */}{/* To see TabNavigation uncomment "TabNavi" line */}

            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="Pickup" component={Pickup} />
            <Stack.Screen name="Destination" component={Destination} />
            <Stack.Screen name="CarSelection" component={CarSelection} />

            <Stack.Screen name="ExpoMap" component={ExpoMap} />

        </Stack.Navigator>
        // </NavigationContainer >
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