import React, {useState} from 'react';
import {Button, FlatList, Text, TouchableOpacity, View} from 'react-native';
import TodoItem from "../components/ToDoLine/TodoItem";


const TodoDoneScreen = ({ route, navigation }) => {

    const { data, funcRemove } = route.params;

    const [todos, setTodos] = useState(data?.filter((item) => item.completed));

    const keyExtractor = (index) => {
        return index.toString();
    };

    const handleRemoveItem = (index) => {
        const items = [...todos];
        items.splice(index, 1)
        setTodos(items);
        funcRemove(index)
    }

    console.log(data)

    return (
        <View style={{flex: 1, margin: 8, padding: 16}}>
            <FlatList
                data={todos}
                keyExtractor={(item, index) => keyExtractor(index)}
                renderItem={({item, index}) => (
                    <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                        <Text>{item.text}</Text>
                        <TouchableOpacity
                            onPress={() => handleRemoveItem(index)}
                        >
                            <Text>Удалить</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
            <Button
                onPress={() => navigation.goBack()}
                title="Go to TODOs screen"
            />
        </View>
    )
}

export default TodoDoneScreen;
