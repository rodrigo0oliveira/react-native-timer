import { Pressable, StyleSheet, Text } from "react-native";

interface ActionButtonProps {
    children: React.ReactNode,
    isActive: boolean,
    onPress: () => void
}

const styles = StyleSheet.create({
    text: {
        color: "#FFF",
        padding: 8,
        fontSize: 14

    },
    pressable: {
        backgroundColor: "#144480",
        borderRadius: 8,
    }
});

export default function ActionButton({ children, isActive, onPress }: ActionButtonProps) {
    return (
        <Pressable
            style={isActive ? styles.pressable : null}
            onPress={() => onPress()}
        >
            <Text style={styles.text}>
                {children}
            </Text>
        </Pressable>
    )
}