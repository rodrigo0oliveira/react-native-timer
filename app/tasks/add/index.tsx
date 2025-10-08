import { useTaskContext } from "@/components/context/useTaskContext";
import FokusButton from "@/components/FokusButton";
import Footer from "@/components/Footer";
import { IconAdd, SmallIconSave } from "@/components/Icons/icon";
import { useState } from "react";
import { Keyboard, KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#021123",
        flex: 1,
        alignItems: "center",
        gap: 40

    },
    title: {
        color: "#FFF",
        fontSize: 26,
        fontWeight: "semibold",
        paddingTop: 40
    },
    containerBackInput: {
        backgroundColor: "#98A0A8",
        width: 312,
        height: 312,
        gap: 16,
        borderRadius: 8,
        padding: 16
    },
    questionText: {
        color: "#021123",
        fontSize: 18,
        fontWeight: "bold"
    },
    input: {
        backgroundColor: "#FFF",
        width: 280,
        height: 120,
        borderRadius: 8,
        padding: 16
    },
    actions: {
        flexDirection: "row",
        justifyContent: "flex-end",
        gap: 40
    },
    actionButton: {
        flexDirection: "row",
        alignItems: "center",
        gap: 2,
        fontWeight: "bold"
    }
});
export default function Index() {
    const { addTask } = useTaskContext();

    const [description, setDescription] = useState<string>("");

    const add = (description: string) => {
        addTask(description);
        setDescription("");
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <Text style={styles.title}>
                        Adicionar tarefa:
                    </Text>
                    <View style={styles.containerBackInput}>
                        <Text style={styles.questionText}>Em que você está trabalhando?</Text>
                        <TextInput
                            style={styles.input}
                            value={description}
                            onChangeText={text => setDescription(text)}
                        />
                        <View style={styles.actions}>
                            <View style={styles.actionButton}>
                                <Pressable onPress={() => add(description)}>
                                    <SmallIconSave />
                                </Pressable>
                                <Text>Salvar</Text>
                            </View>
                        </View>
                    </View>
                    <FokusButton children="Adicionar tarefa" icon={<IconAdd />} outline onPress={() => add(description)} />
                    <Footer />
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}