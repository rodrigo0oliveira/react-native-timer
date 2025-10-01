import { Pressable, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
    pressable: {
        width: "80%",
        backgroundColor: "#B872FF",
        height: 43,
        padding: 8,
        borderRadius: 32,
        justifyContent: "center"
    },
    pressable_text: {
        textAlign: "center",
        color: "#021123",
        fontSize: 18,
        fontWeight: "bold"
    }
});

export default function FokusButton() {
    return (
        <Pressable
            style={styles.pressable}
        >
            <Text
                style={styles.pressable_text}
            >
                Começar
            </Text>
        </Pressable>
    );
}