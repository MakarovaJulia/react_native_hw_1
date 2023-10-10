import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import TodoScreen from "./screens/TodoScreen";
import TodoDoneScreen from "./screens/TodoDoneScreen";

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={'Home'} component={HomeScreen}/>
                <Stack.Screen name={'Todo'} component={TodoScreen}/>
                <Stack.Screen name={'TodoDone'} component={TodoDoneScreen}/>
                <Stack.Screen name={'About'} component={AboutScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default App;
