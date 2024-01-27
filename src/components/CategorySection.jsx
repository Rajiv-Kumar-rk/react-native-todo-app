import { StyleSheet, View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";

function CategorySection() {
    return (
        <View style={styles.categoriesSection}>
            <View style={styles.categoryForm}>
                {/* <Text style={styles.categoryInputLabel}>Category: </Text>
                <TextInput placeholder="Select category..." style={styles.categoryInput}></TextInput> */}
                <Text style={{color: '#5b74f5', fontSize: 20, fontWeight: '400'}}>Manage your todos here!</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    categoriesSection: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    categoryForm: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        gap: 5
    },
    categoryInputLabel: {
        color: 'black',
        fontSize: 25
    },
    categoryInput: {
        backgroundColor: 'white', 
        borderWidth: 1.25,
        borderColor: '#2d4ef7', 
        borderRadius: 5, 
        padding:4
    }
})

export default CategorySection;