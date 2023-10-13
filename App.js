import React from 'react';
import {Button, Text, View} from "react-native"
import {Icon} from "react-native-elements"
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import AboutScreen from "./screens/AboutScreen";
import HomeScreen from "./screens/HomeScreen";
import NewsScreen from "./screens/NewsScreen";
import ChatScreen from "./screens/ChatScreen";
import SettingsScreen from "./screens/SettingsScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator initialRouteName={'Home'}
                       screenOptions={({ route }) => ({
                           tabBarIcon: () =>{
                               if (route.name === 'Home'){
                                   return <Icon type="feather" name="home"/>
                               } else if (route.name === 'Chat'){
                                   return <Icon type="feather" name="message-circle"/>
                               } else if (route.name === 'Settings'){
                                   return <Icon type="feather" name="settings"/>
                               } else if (route.name === 'News'){
                                   return <Icon type="feather" name="grid"/>
                               }
                           }
                       })}>
            <Tab.Screen name="Home" component={HomeStack} options={{headerShown: false}}/>
            <Tab.Screen name="News" component={NewsScreen} options={{headerTitleAlign: "center"}}/>
            <Tab.Screen name="Chat" component={ChatScreen} options={{headerTitleAlign: "center"}}/>
            <Tab.Screen name="Settings" component={SettingsScreen} options={{headerTitleAlign: "center"}}/>
        </Tab.Navigator>
    )
}


const HomeStack = () => {
    return (
    <Stack.Navigator>
        <Stack.Screen
            name={'HomeScreen'}
            component={HomeScreen}
            options={(props) => ({
                headerTitleAlign: "center",
                headerTitle: (props) =>
                    <Icon
                        type="feather"
                        name="coffee"
                    />,
                headerRight: () => (
                    <Button
                        onPress={() => props.navigation.navigate('About')}
                        title="About app"
                        color="#000"
                    />)
            })}
        />
        <Stack.Screen name={'About'} component={AboutScreen} initialParams={{ itemId: 42 }}/>
    </Stack.Navigator>
);
}

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={'Tab'} component={TabNavigation} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App
