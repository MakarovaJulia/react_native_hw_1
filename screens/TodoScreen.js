import React, { useEffect, useState } from 'react';
import {Button, StyleSheet, Text, View, TextInput, FlatList, SafeAreaView} from 'react-native';
import TodoItem from "../ToDoLine/TodoItem";

const TodoScreen = ({ navigation: { navigate } }) => {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState("");

    const addItem = () => {
        setTodos([...todos, {text, completed: false}]);
        setText("");
    };

    const toggleItem = (index) => {
        const items = [...todos];
        items[index].completed = !items[index].completed;
        setTodos(items);
    }

    const removeItem = (index) => {
        const items = [...todos];
        items.splice(index, 1)
        setTodos(items);
    }

    const keyExtractor = (index) => {
        return index.toString();
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text>NEW:</Text>
                <FlatList
                    data={todos}
                    keyExtractor={(item, index) => keyExtractor(index)}
                    renderItem={({item, index}) => (
                        <TodoItem item={item} index={index} removeItem={removeItem} toggleItem={toggleItem} />
                    )}
                />
                <TextInput style={styles.textInput} onChangeText={newText => setText(newText)} value={text}></TextInput>
                <Button title=" ADD " onPress={() => addItem() }></Button>
                <Button
                    onPress={() =>
                        navigate('TodoDone', {data: todos, funcRemove: removeItem, funcToggle: toggleItem})
                    }
                    title="Go to done TODOs screen"
                />
            </View>
        </SafeAreaView>
    )
}

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
