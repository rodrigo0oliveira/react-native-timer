import { Stack } from 'expo-router';

export default function Layout() {
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#021123',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold'
                },
                contentStyle: {
                    backgroundColor: "#021123"
                }
            }
            }>
        </ Stack >
    );
}
