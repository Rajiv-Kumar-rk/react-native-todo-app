import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useIsFocused, useRoute } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler';

const TodoAddFormScreen = () => {
    const navigation = useNavigation();

    let desc = ``

    function submitTodo() {
        navigation.navigate('MainScreen');
    }

    return (
        <View style={styles.todoForm}>
            <ScrollView style={{width: '100%', alignSelf: 'center'}}>
                <View style={{width: '100%', height: '100%', flex:1, justifyContent: 'center', alignItems: 'center', gap: 20, paddingVertical: 50}}>
                    <TextInput placeholder='Enter todo title' style={styles.todoFormInput}></TextInput>
                    <TextInput 
                        placeholder='Enter todo description note...' 
                        style={styles.todoDescriptionInput}
                        multiline
                        numberOfLines={10}
                        // value={desc}
                    ></TextInput>
                    <TouchableOpacity style={styles.todoSubmitButton} onPress={submitTodo}>
                        <Text style={{fontSize: 18, color: 'white', fontWeight: '500'}}>Submit</Text>
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
    todoSubmitButton:{
        width: '80%',
        height: 40,
        backgroundColor: '#5b74f5',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default TodoAddFormScreen;