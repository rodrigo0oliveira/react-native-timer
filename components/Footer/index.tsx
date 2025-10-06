import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    footer: {
        width: "80%"
    },
    footer_text: {
        color: "#98A0A8",
        textAlign: "center"
    }
});

export default function Footer() {
    return (
        <View>
            <Text style={styles.footer_text}>
                Projeto feito para estudos
            </Text>
            <Text style={styles.footer_text}>
                Desenvolvido por Rodrigo
            </Text>
        </View>
    )
}