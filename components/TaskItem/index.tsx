import { Pressable, StyleSheet, Text, View } from "react-native";
import { IconCheck, IconDelete, IconEdit } from "../Icons/icon";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "#98A0A8",
        width: 312,
        justifyContent: "space-around",
        height: 64,
        alignItems: "center",
        borderRadius: 8,
        padding: 8
    },
    container_done: {
        flexDirection: "row",
        width: 312,
        justifyContent: "space-around",
        height: 64,
        alignItems: "center",
        borderRadius: 8,
        padding: 8,
        backgroundColor: "#0F725C"
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#021123",
    }
})

interface TaskItemProps {
    children: React.ReactNode
    done?: boolean
    onDelete: () => void
    onEdit: () => void
    onToogleComplete: () => void
}

export default function TaskItem({ children, done, onDelete, onEdit, onToogleComplete }: TaskItemProps) {
    const stylesContainer = [styles.container];
    if (done) {
        stylesContainer.push(styles.container_done)
    }
    return (
        <View style={stylesContainer}>
            <Pressable onPress={onToogleComplete}>
                <IconCheck />
            </Pressable>
            <Text style={styles.text}>{children}</Text>
            <Pressable onPress={onEdit}>
                <IconEdit />
            </Pressable>
            <Pressable onPress={onDelete}>
                <IconDelete />
            </Pressable>
        </View>
    )
}