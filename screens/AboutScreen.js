import React from 'react';
import {Button, Text, View} from 'react-native';


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

export default AboutScreen;
