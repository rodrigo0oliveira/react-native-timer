import { TaskProvider } from '@/components/context/TaskProvider';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import { Drawer } from 'expo-router/drawer';

export default function Layout() {
    return (
        <TaskProvider>
            <Drawer
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#021123',
                    },
                    headerTintColor: '#fff',
                    drawerLabelStyle: {
                        color: "#FFF"
                    },
                    drawerContentStyle: {
                        backgroundColor: '#021123',
                    },
                }
                }>

                <Drawer.Screen
                    name='index'
                    options={{
                        drawerLabel: "Home",
                        title: "",
                        drawerItemStyle: {
                            display: "none"
                        },
                        headerShown: false
                    }}
                />

                <Drawer.Screen
                    name='timer'
                    options={{
                        drawerLabel: "Timer",
                        title: ""
                    }}
                />

                <Drawer.Screen
                    name='tasks/list/index'
                    options={{
                        drawerLabel: "Lista de tarefas",
                        title: "",
                    }}
                />

                <Drawer.Screen
                    name='tasks/add/index'
                    options={{
                        title: "",
                        drawerItemStyle: {
                            display: "none"
                        },
                        headerLeft: () => {
                            return <Ionicons onPress={() => router.replace("/tasks/list")} name='arrow-back' size={22} style={{ marginLeft: 14 }} color={"#FFF"}></Ionicons>
                        }
                    }}
                />

            </ Drawer >
        </TaskProvider>

    );
}
