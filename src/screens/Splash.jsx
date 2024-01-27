import { useEffect } from "react";
import { View , Text, StyleSheet } from "react-native"

function Splash({ navigation }){

    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('MainScreen');
        }, 2000)
    }, [])

    return (
        <View style={styles.splash}>
            <View style={styles.splashContent}>
                <Text style={styles.splashContentTitle}>Todo</Text>
                <View style={styles.splashContentHighlightedTitleContainer}>
                    <Text style={styles.splashContentHighlightedTitleContainerTitle}>Tasks</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    splash: {
        backgroundColor: '#2d4ef7',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    splashContent: {
        height: 60,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    splashContentTitle: {
        color: 'white',
        fontSize: 30,
        padding: 5
    },
    splashContentHighlightedTitleContainer: {
        backgroundColor: 'white',
        height: 50,
        width: 100,
        borderRadius: 10,
        padding: 2,
        justifyContent: 'center',
        alignItems:'center'
    },
    splashContentHighlightedTitleContainerTitle: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#2d4ef7',
        borderRadius: 10,
        backgroundColor: 'white',
        color: '#2d4ef7',
        fontSize: 30,
        paddingVertical: 2,
        textAlign: 'center'
    }

})
export default Splash;
