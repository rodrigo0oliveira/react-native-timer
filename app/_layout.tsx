import { Drawer } from 'expo-router/drawer';

export default function Layout() {
    return (
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

        </ Drawer >
    );
}
