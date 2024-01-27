import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

function Todo() {
    const navigation = useNavigation();
    const todoData = {
        'id': 1,
        'title': 'Mid term exam prep',
        'description': `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus a quisquam facilis dolores, vel rem modi tenetur totam ipsam similique quidem inventore, voluptates voluptatem praesentium officiis consectetur iste. Sunt, sit?
        Repudiandae, et quis. At animi repellendus saepe neque expedita ullam iusto adipisci, eius accusantium unde quae placeat quis corrupti autem libero et atque nam reiciendis excepturi optio ipsa eum eveniet!`,
        'status': 0,
        'dateCreated': '12/01/2024',
        'dateCompleted': '15/01/2024',
    }

    function todoDetails(props) {
        navigation.navigate('TodoDetailsScreen', props);
    }

    return (
        <TouchableOpacity activeOpacity={0.8} onPress={()=>todoDetails(todoData)}>
            <View style={styles.todo}>
                <View style={styles.todoStatusAndMessage}>
                    <View style={styles.todoStatus}></View>
                    <Text style={styles.todoMessage}>Go to market</Text>
                </View>
                <View style={styles.todoDates}>
                    <Text style={styles.todoDate}>Created: 12/01/2024</Text>
                    <Text style={styles.todoDate}>Completed: 12/01/2024</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todo: {
        height: 50,
        backgroundColor: '#5b74f5',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'white',
    },
    todoStatusAndMessage: {
        flex: 4,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 10
    },
    todoStatus: {
        width: 22,
        height: 22,
        borderRadius: 8, 
        backgroundColor: 'white'
    },
    todoMessage: {
        color: 'white',
        fontSize: 22,
        fontWeight: '400'
    },
    todoDates: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'flex-end',
        gap: 0
    },
    todoDate: {
        color: 'white',
        fontSize: 12
    }
})

export default Todo;