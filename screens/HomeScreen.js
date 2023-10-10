import React from 'react';
import {Button, Text, View} from 'react-native';

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
            <Button
                onPress={() =>
                    navigate('Todo')
                }
                title="Go to TODOs"
            />
        </View>
    )
}

export default HomeScreen;
