import { Modal, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from "./screens/Splash";
import MainScreen from "./screens/MainScreen";
import TodoFormScreen from "./screens/TodoAddFormScreen";
import TodoDetailsScreen from "./screens/TodoDetailsScreen";

const Stack = createStackNavigator();

function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                screenOptions={{
                    headerShown: false, 
                    headerStyle: {backgroundColor: '#2d4ef7'},
                    headerTintColor: 'white'
                }}
            >
                <Stack.Screen 
                    name="Splash" 
                    component={Splash} 
                />
                <Stack.Screen 
                    name="MainScreen" 
                    component={MainScreen}
                />
                <Stack.Screen 
                    name="AddTodoScreen" 
                    component={TodoFormScreen}
                    options={{
                        headerShown: true, 
                        title: 'New Todo', 
                    }} 
                />
                <Stack.Screen 
                    name="TodoDetailsScreen" 
                    component={TodoDetailsScreen}
                    options={{
                        headerShown: true, 
                        title: 'Todo Details', 
                        
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;