import { Link } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Footer from "../components/Footer";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#021123",
    flex: 1
  },
  containerTextHome: {
    paddingLeft: 16,
    paddingRight: 16,
    alignItems: "center",
    height: 158,
    marginBottom: 16
  },
  textHome: {
    fontSize: 26,
    color: "#FFF",
    fontWeight: "200"
  },
  textHomeBold: {
    fontSize: 26,
    color: "#FFF",
    fontWeight: "600"
  },
  pressable: {
    backgroundColor: "#B872FF",
    width: 264,
    minHeight: 40,
    marginTop: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 32,
    marginBottom: 40
  },
  pressableText: {
    fontSize: 18,
    fontWeight: "bold"
  }
})

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("./images/fokus-logo.png")}
      >
      </Image>

      <View style={styles.containerTextHome}>
        <Text style={styles.textHome}>Otimize sua</Text>
        <Text style={styles.textHome}>produtividade</Text>
        <Text style={styles.textHomeBold}>mergulhe no que</Text>
        <Text style={styles.textHomeBold}>importa</Text>
      </View>

      <Image source={require("./images/home.png")}>

      </Image>


      <Pressable style={styles.pressable}>
        <Link href={{ pathname: "/timer" }} style={styles.pressableText}>
          Quero iniciar!
        </Link>
      </Pressable>

      <Footer>

      </Footer>
    </SafeAreaView>
  )
}