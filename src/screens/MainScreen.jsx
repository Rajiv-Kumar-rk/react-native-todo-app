import { StyleSheet, Text, View } from "react-native";
import CategorySection from "../components/CategorySection";
import TodosSection from "../components/TodosSection";
import AddTodo from "../components/AddTodo";
import BottomSheet from "../components/BottomSheet";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

function MainScreen() {
    const [isModalVisible, setModalVisible] = useState(false);
    
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <View style={styles.mainScreen}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Todo</Text>
            </View>
            <View style={styles.body}>
                <CategorySection />
                <TodosSection isModalVisible={isModalVisible} setModalVisible={setModalVisible} toggleModal={toggleModal} />
            </View>
            <AddTodo/>
            <BottomSheet isModalVisible={isModalVisible} setModalVisible={setModalVisible} toggleModal={toggleModal} />
        </View>
    )
}

const styles = StyleSheet.create({
    mainScreen: {
        backgroundColor: 'black',
        flex: 1
    },
    header: {
        backgroundColor: '#2d4ef7',
        height: 50,
        paddingLeft: 10,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    headerTitle: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    },
    body: {
        backgroundColor: 'white',
        flex: 1,

    }
})

export default MainScreen;