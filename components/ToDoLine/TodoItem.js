import {
    Button,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import React, { useEffect } from 'react';
import {useRootStore} from "../../hooks/useRootStore";
import {observer} from "mobx-react";

export const TodoItem = observer(props => {


    const { todosStore } = useRootStore();

    useEffect(() => {
        console.log("todo item " + todosStore.todosModel.todoList[props.index].completed)
        console.log("todo item props " + props.item.completed)
    }, [todosStore.todosModel.todoList[props.index].completed])


    return (
        <View style={styles.todoLine}>
            <TouchableOpacity
                style={styles.todoLineTouch}
                onPress={() => props.toggleItem(props.index)}
            >
                <Text style={styles.text}>
                    {props.item.text}
                    {props.item.completed && " [выполнен]"}
                </Text>
            </TouchableOpacity>
            <Button
                title="X"
                onPress={() => props.removeItem(props.index)}
            />
        </View>
    )
})

const styles = StyleSheet.create({
    todoLine: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        margin: 8,
        flexDirection: "row"
    },
    todoLineTouch:{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
});


export default TodoItem
