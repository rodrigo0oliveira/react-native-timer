import { useTaskContext } from "@/components/context/useTaskContext";
import FokusButton from "@/components/FokusButton";
import { IconAdd } from "@/components/Icons/icon";
import TaskItem from "@/components/TaskItem";
import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#021123",
        flex: 1,
        alignItems: "center",
    },
    containerWrapper: {
        backgroundColor: "#021123",
        alignItems: "center",
        gap: 8,
    },
    textTitle: {
        fontSize: 26,
        color: "#FFF",
        paddingBottom: 24
    },
})

export default function Index() {
    const { tasks, deleteTask, toogleTaskComplete } = useTaskContext();



    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerWrapper}>
                <FlatList
                    ListEmptyComponent={() => <SafeAreaView style={styles.container}>
                        <View style={styles.containerWrapper}>
                            <Text style={{ color: "#FFF" }}>Ainda não há tarefas cadatradas!</Text>
                        </View>

                    </SafeAreaView>}
                    ItemSeparatorComponent={() => <View style={{ height: 10 }}></View>}
                    data={tasks}
                    ListHeaderComponent={
                        <View style={{ alignItems: "center" }}>
                            <Text style={styles.textTitle}>
                                Lista de tarefas:
                            </Text>
                        </View>}
                    renderItem={({ item }) =>
                        <TaskItem
                            children={item.description}
                            done={item.complete}
                            onDelete={() => deleteTask(item.id)}
                            onEdit={() => router.navigate({
                                pathname: '/tasks/edit/[id]',
                                params: { id: item.id }
                            })}
                            onToogleComplete={() => toogleTaskComplete(item.id)}

                        />}
                    keyExtractor={item => item.id}
                    ListFooterComponent={
                        <View style={{ gap: 10, marginTop: 24 }}>
                            <FokusButton icon={<IconAdd />} outline onPress={() => router.navigate("/tasks/add")}>
                                Adicionar nova tarefa
                            </FokusButton>
                        </View>
                    }
                />
            </View>
        </SafeAreaView >
    );
}