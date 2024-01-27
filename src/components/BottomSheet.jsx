import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Modal from "react-native-modal";

const BottomSheet = ({isModalVisible, setModalVisible, toggleModal, }) => {
    let [todoStatus, setTodoStatus] = useState(parseInt(0));
    return (
        <View>
        <Modal 
        animationIn={'slideInUp'}
        animationInTiming={300}
        animationOut={'slideOutDown'}
        animationOutTiming={300}
        backdropTransitionInTiming={300}
        backdropTransitionOutTiming={300}
        onBackdropPress={()=>setModalVisible()}
        isVisible={isModalVisible} 
        style={styles.bottomSheetModal} 
        onBackButtonPress={()=>setModalVisible()}
        >
            <View style={styles.bottomSheet}>
                <View style={styles.bottomSheetContent}>
                    <Text style={styles.bottomSheetContentTitle}>Todo Status</Text>
                    <View style={styles.bottomSheetContentBody}>
                        
                        <TouchableOpacity activeOpacity={0.8} onPress={()=>setTodoStatus(0)}>
                            <View style={styles.bottomSheetContentBodyItem}>
                                <Text style={styles.itemTtile}>Pending</Text>
                                <View style={styles.itemSelectorCol}>
                                    <View style={[styles.itemSelector, todoStatus===0? styles.selectedStatus: '']}></View>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.8} onPress={()=>setTodoStatus(1)}>
                            <View style={styles.bottomSheetContentBodyItem}>
                                <Text style={styles.itemTtile}>Completed</Text>
                                <View style={styles.itemSelectorCol}>
                                    <View style={[styles.itemSelector, todoStatus===1? styles.selectedStatus: '']}></View>
                                </View>
                            </View>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    bottomSheetModal: {
        marginBottom: 0,
        marginHorizontal: 0
    },
    bottomSheet: {
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        // height: 200,
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 10,
    },
    bottomSheetContent: {
        flex: 1
    },
    bottomSheetContentTitle: {
        height: 30,
        color: 'grey',
        padding: 5,
        fontSize: 16,
        borderBottomColor: 'grey',
        borderBottomWidth:.5
    },
    bottomSheetContentBody: {
        flex: 1,
    },
    bottomSheetContentBodyItem: {
        height: 50,
        // backgroundColor: 'grey',
        // flex: 1,
        borderBottomWidth: 0.2,
        borderBottomColor: 'grey',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    itemTtile: {
        flex: 3,
        fontSize: 20,
        color: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemSelectorCol: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingVertical: 10
    },
    itemSelector: {
        flex: 1,
        height: 30,
        width: 30,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#2d4ef7',
    },
    selectedStatus: {
        backgroundColor: '#5b74f5',
        
    }
})

export default BottomSheet;