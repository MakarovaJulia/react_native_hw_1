import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native' ;
import { Text, View, Button } from 'react-native'
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const HomeScreen = ({ navigation: { navigate } }) => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
            <Text>Home Screen</Text>
            <Button
                onPress={() =>
                    navigate('About')
                }
                title="Go to About screen"
            />
        </View>
    )
}

const AboutScreen = ({ navigation: { goBack } }) => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
            <Text>About Screen</Text>
            <Button
                onPress={() => goBack()}
                title="Go to Home screen"
            />
        </View>
    )
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name={'Home'} component={HomeScreen}/>
            <Stack.Screen name={'About'} component={AboutScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}
export default App;
