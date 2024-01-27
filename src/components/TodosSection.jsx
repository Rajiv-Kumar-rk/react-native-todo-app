import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { ScrollView,  } from 'react-native-gesture-handler';
import Todo from './Todo';
import { useNavigation } from '@react-navigation/native';

function TodosSection({isModalVisible, setModalVisible, toggleModal}) {

    return (
        <View style={styles.todosSection}>
            <View style={styles.todosStatusSection}>
                <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>Todos</Text>
                <TouchableOpacity onPress={toggleModal} style={styles.todosFilterBtn}>
                    <Text style={{padding: 8, fontSize: 15, fontWeight: 'light', color: 'white'}}>Filter</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.todos}>
                <ScrollView>
                    <Todo></Todo>
                    <Todo></Todo>
                    <Todo></Todo>
                    <Todo></Todo>
                    <Todo></Todo>
                    <Todo></Todo>
                    <Todo></Todo>
                    <Todo></Todo>
                    <Todo></Todo>
                    <Todo></Todo>
                    <Todo></Todo>
                    <Todo></Todo>
                    <Todo></Todo>
                    <Todo></Todo>
                    <Todo></Todo>
                </ScrollView>
            </View>
        </View>
    )
}

const styles  = StyleSheet.create({
    todosSection: {
        flex: 1,
    }, 
    todosStatusSection: {
        height: 60,
        backgroundColor: '#2d4ef7',
        borderBottomWidth: 0.8,
        borderBottomColor: 'white',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }, 
    todosFilterBtn: {
        backgroundColor: '#5b74f5',
        width: 80,
        borderWidth: 0.4,
        borderRadius: 20,
        borderBlockColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
    todos: {
        flex: 1,
        backgroundColor: 'white'
    }
})

export default TodosSection;