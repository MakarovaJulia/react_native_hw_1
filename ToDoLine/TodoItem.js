import {
    Button,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

export const TodoItem = props => {

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
}

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
