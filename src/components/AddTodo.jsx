import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text} from 'react-native'

const AddTodo = () => {
    
  const navigate = useNavigation();

  function todoFormScreen() {
      navigate.navigate('AddTodoScreen');
  }
  return (
    <TouchableOpacity style={styles.addTodoButton} onPress={todoFormScreen}>
        <Text style={styles.addBtnContent}>+</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    addTodoButton: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        height: 80,
        width: 80,
        borderRadius: 50,
        backgroundColor: '#2d4ef7',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    addBtnContent: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
    }
})

export default AddTodo;