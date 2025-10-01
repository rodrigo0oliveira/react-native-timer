import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import FokusButton from "./components/FokusButton";
import ActionButton from "./components/ActionButton";
import Timer from "./components/Timer";

const types = [
  {
    id: 'focus',
    time: 25,
    image: require("./images/focus.png"),
    display: 'Foco'
  },
  {
    id: 'short',
    time: 5,
    image: require("./images/short.png"),
    display: 'Pausa curta'
  },
  {
    id: 'long',
    time: 25,
    image: require("./images/long.png"),
    display: 'Pausa longa'
  }
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#021123",
    gap: 40
  },
  containerAction: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "center"
  },
  actions: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#14448080",
    height: 268,
    width: "80%",
    borderWidth: 2,
    borderRadius: 32,
    borderColor: "#144480",
    gap: 32,
    padding: 24
  },
  footer: {
    width: "80%"
  },
  footer_text: {
    color: "#98A0A8",
    textAlign: "center"
  }
});

export default function Index() {

  const [typeTimer, setTypeTimer] = useState(types[0]);

  return (
    <View
      style={styles.container}
    >
      <Image
        source={typeTimer.image}
      >
      </Image>

      <View
        style={styles.actions}
      >

        <View style={styles.containerAction}>
          {types.map((t) => (
            <ActionButton
              key={t.id}
              isActive={t.id === typeTimer.id}
              onPress={() => setTypeTimer(t)}
            >
              {t.display}
            </ActionButton>
          ))}
        </View>

        <Timer
          totalSeconds={typeTimer.time}
        />

        <FokusButton />

      </View>

      <View>
        <Text style={styles.footer_text}>
          Projeto fictício e sem fins comerciais.
        </Text>
        <Text style={styles.footer_text}>
          Desenvolvido por Alura.
        </Text>
      </View>

    </View >
  );
}


