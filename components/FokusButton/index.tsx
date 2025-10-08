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
    outline: {
        backgroundColor: "#021123",
        borderColor: "#B872FF",
        borderWidth: 2,
        width: 312,
        borderRadius: 32,
        justifyContent: "center",
        alignItems: "center"
    },
    pressable_text: {
        textAlign: "center",
        color: "#021123",
        fontSize: 18,
        fontWeight: "bold"
    },
    outlineText: {
        textAlign: "center",
        alignItems: "center",
        color: "#B872FF",
        fontSize: 18,
        fontWeight: "bold"
    }
});

interface FokusButtonProps {
    children: React.ReactNode
    onPress?: () => void,
    icon: React.ReactElement,
    outline?: boolean,

}

export default function FokusButton({ onPress, children, icon, outline }: FokusButtonProps) {
    var styleButton: any[] = [styles.pressable]
    var styleText: any[] = [styles.pressable_text]

    if (outline) {
        styleButton.push(styles.outline);
        styleText.push(styles.outlineText)
    }

    return (
        <Pressable
            onPress={onPress}
            style={styleButton}
        >
            <Text
                style={styleText}
            >
                {icon}  {children}
            </Text>
        </Pressable>
    );
}