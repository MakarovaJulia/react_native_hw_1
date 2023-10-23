import React, {useEffect, useState} from 'react';
import {Button, FlatList, Text, TouchableOpacity, View} from 'react-native';
import TodoItem from "../components/ToDoLine/TodoItem";
import {observer} from "mobx-react";
import {useRootStore} from "../hooks/useRootStore";


const TodoDoneScreen = observer(({ navigation }) => {

    const { todosStore } = useRootStore();

    const [todos, setTodos] = useState(todosStore.actionGetCompleted(todosStore.todosModel.todoList) || []);

    useEffect(()=>{
        console.log(todos)
    }, [todos])


    const handleRemoveItem = (index) => {
        console.log("item from handleRemoveItem " + index)
        todosStore.actionChange(index)
        setTodos(todosStore.actionGetCompleted(todosStore.todosModel.todoList))
    }

    return (
        <View style={{flex: 1, margin: 8, padding: 16}}>
            <FlatList
                data={todos}
                renderItem={({item}) => (
                    <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                        <Text>{item.text}</Text>
                        <TouchableOpacity
                            onPress={() => handleRemoveItem(item.index)}
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
})

export default TodoDoneScreen;
