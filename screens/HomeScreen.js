import React, {useEffect} from 'react';
import {ActivityIndicator, Button, SafeAreaView, Text, View} from 'react-native';
import {observer} from "mobx-react";
import {mobxClicker} from "../components/MobxClicker";
import {useRootStore} from "../hooks/useRootStore";

const HomeScreen = observer(() => {
    const { clickerStore } = useRootStore();

    useEffect(() => {
        clickerStore.getClickerObjectFromService();
    }, [])

    const handleOnClick = () => {
        clickerStore.actionClick();
    }

    const handleOnReset = () => {
        mobxClicker.resetClick();
    }

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
            <SafeAreaView>
                <View>
                    {/*<Text>Count clicker value: {mobxClicker.count}</Text>*/}
                    {/*<Text>Double value: {mobxClicker.doubleCount}</Text>*/}
                    {/*<Button onPress={handleOnClick} title={'Click me'}/>*/}
                    {/*<Button onPress={handleOnReset} title={'Reset'}/>*/}
                    {clickerStore.clickerModel && !clickerStore.isLoading ? (
                        <Text>{clickerStore.clickerModel.count}</Text>
                    ) : (
                        <ActivityIndicator/>)
                    }
                    <Button onPress={handleOnClick} title={'click me'}/>
                </View>
            </SafeAreaView>
        </View>
    )
})

export default HomeScreen;
