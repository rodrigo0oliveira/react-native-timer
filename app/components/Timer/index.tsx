import { StyleSheet, Text } from "react-native"

interface TimerProps {
    totalSeconds: number
}

const styles = StyleSheet.create({
    timer: {
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 54,
    }
});

function formatTimeValue(totalSeconds: number) {
    const date = new Date(totalSeconds * 1000);
    return date.toLocaleTimeString("pt-BR", { minute: "2-digit", second: "2-digit" })
}

export default function Timer({ totalSeconds }: TimerProps) {
    const timeValue = formatTimeValue(totalSeconds);

    return (
        <Text
            style={styles.timer}
        >
            {timeValue}
        </Text>
    )
}