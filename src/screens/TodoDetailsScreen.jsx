import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

const TodoDetailsScreen = () => {
    const navigation = useNavigation();
    const props = useRoute();
    let todoData = {...props.params}

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight: ()=>{
                return (
                    <Icon
                        name="trash" 
                        size={23}
                        color="white"
                        style={{ marginRight: 20 }}
                        onPress={() => {
                            //delete todo

                            navigation.navigate('MainScreen');

                        }}
                    />
                )
            }
        })
    }, [navigation])

    let [todoStatus, setTodoStatus] = useState(parseInt(todoData.status));
    let [todoTitle, setTodoTitle] = useState(todoData.title);
    let [todoDescription, setTodoDescription] = useState(todoData.description);

    // console.warn(todoStatus)
    function onSaveClick() {
        navigation.navigate('MainScreen');
    }

    return (
        <View style={styles.todoForm}>
            <ScrollView style={{width: '100%', alignSelf: 'center'}}>
            <View style={{width: '100%', height: '100%', flex:1, justifyContent: 'center', alignItems: 'center', gap: 20, paddingVertical: 50}}>
                <View style={styles.todoStatusSelectorInput}>
                    <TouchableOpacity style={[styles.todoStatusBtn, todoStatus!==0? {backgroundColor: 'white'} : '']} activeOpacity={0.8} onPress={()=>setTodoStatus(0)}>
                        <Text style={[styles.todoStatusBtnContent, todoStatus!==0? {color: '#5b74f5'} : '']}>Pending</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.todoStatusBtn, todoStatus!==1? {backgroundColor: 'white'} : '']} activeOpacity={0.8} onPress={()=>setTodoStatus(1)}>
                        <Text style={[styles.todoStatusBtnContent, todoStatus!==1? {color: '#5b74f5'} : '']}>Completed</Text>
                    </TouchableOpacity>
                </View>
                <TextInput 
                    placeholder='Enter todo title' 
                    style={styles.todoFormInput} 
                    value={todoTitle}
                    onChange={(e)=>setTodoTitle(()=>e.target.value)}
                ></TextInput>
                <TextInput 
                    placeholder='Enter todo description note...' 
                    style={styles.todoDescriptionInput}
                    multiline
                    numberOfLines={10}
                    value={todoDescription}
                    onChange={()=>setTodoDescription(()=>todoDescription)}
                ></TextInput>
                <TouchableOpacity style={styles.todoSubmitButton} onPress={onSaveClick}>
                    <Text style={{fontSize: 18, color: 'white', fontWeight: '500'}}>Save</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    todoForm: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20
    },
    todoFormInput: {
        width: '80%',
        borderWidth: 0.8,
        borderColor: '#5b74f5',
        borderRadius: 10,
        fontSize: 18,
        paddingHorizontal: 10
    },
    todoDescriptionInput: {
        width: '80%',
        borderWidth: 0.8,
        borderColor: '#5b74f5',
        borderRadius: 10,
        fontSize: 18,
        paddingHorizontal: 10,
        justifyContent: 'flex-start'
    },
    todoStatusSelectorInput: {
        width: '80%',
        height: 50,
        borderWidth: 0.8,
        borderColor: '#5b74f5',
        borderRadius: 10,
        fontSize: 18,
        padding: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // gap: 2
    },
    todoStatusBtn: {
        backgroundColor: '#5b74f5',
        width: '50%',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    todoStatusBtnContent: {
        fontSize: 18,
        fontWeight: '500',
        color: 'white'
    },
    todoSubmitButton:{
        width: '80%',
        height: 40,
        backgroundColor: '#5b74f5',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default TodoDetailsScreen;