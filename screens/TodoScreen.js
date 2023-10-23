import React, { useEffect, useState } from 'react';
import {Button, StyleSheet, Text, View, TextInput, FlatList, SafeAreaView, ActivityIndicator} from 'react-native';
import TodoItem from "../components/ToDoLine/TodoItem";
import {useRootStore} from "../hooks/useRootStore";
import {observer} from "mobx-react";

const TodoScreen = observer(({ navigation: { navigate } }) => {
    const [text, setText] = useState("");

    const { todosStore } = useRootStore();

    useEffect(() => {
        todosStore.getTodoObjectFromService();
    }, [])


    const addItem = () => {
        todosStore.actionAdd({text, completed: false});
        setText("");
    };

    const toggleItem = (index) => {
        todosStore.actionChange(index);
    };

    const removeItem = (index) => {
        todosStore.actionDelete(index);
    }

    const keyExtractor = (index) => {
        return index.toString();
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text>NEW:</Text>
                {todosStore.todosModel && !todosStore.isLoading ? (
                    <FlatList
                        data={todosStore.todosModel.todoList}
                        keyExtractor={(item, index) => keyExtractor(index)}
                        renderItem={({item, index}) => (
                            <TodoItem item={item} index={index} removeItem={removeItem} toggleItem={toggleItem}/>
                        )}
                    />
                ) : (
                    <ActivityIndicator/>)
                }
                <TextInput style={styles.textInput} onChangeText={newText => setText(newText)} value={text}></TextInput>
                <Button title=" ADD " onPress={() => addItem() }></Button>
                <Button
                    onPress={() =>
                        navigate('TodoDone', {data: todosStore.todosModel.todoList, funcRemove: removeItem, funcToggle: toggleItem})
                    }
                    title="Go to done TODOs screen"
                />
            </View>
        </SafeAreaView>
    )
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#eaeaea',
    },
    content:{
        flex: 1,
        padding: 16,
    },
    todoLine: {
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        margin: 8,
    },
    textInput: {
        borderRadius: 4,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 8,
        marginTop: 16,
        marginBottom: 16,
    },
    todoLineTouch:{
    }
});

export default TodoScreen;
