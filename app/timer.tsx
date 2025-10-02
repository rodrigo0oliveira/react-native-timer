import { Stack } from "expo-router";
import { useRef, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import ActionButton from "./components/ActionButton";
import FokusButton from "./components/FokusButton";
import { IconPause, IconStart } from "./components/Icons";
import Timer from "./components/Timer";

const types = [
  {
    id: 'focus',
    time: 25 * 60,
    image: require("./images/focus.png"),
    display: 'Foco'
  },
  {
    id: 'short',
    time: 5 * 60,
    image: require("./images/short.png"),
    display: 'Pausa curta'
  },
  {
    id: 'long',
    time: 25 * 60,
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

export default function TimeScreen() {

  const [typeTimer, setTypeTimer] = useState(types[0]);

  const [titleButtonTimer, setTitleButtonTimer] = useState("Começar");

  const [seconds, setSeconds] = useState(typeTimer.time);

  const refToggle = useRef<number | null>(null);

  const toogleTypeTimer = (typeTimer: any) => {
    setTypeTimer(typeTimer);
    setSeconds(typeTimer.time);
    clear();
  }

  const clear = () => {
    if (refToggle.current != null) {
      clearInterval(refToggle.current);
      refToggle.current = null;
      setTitleButtonTimer("Começar")
    }
  }

  const toggleButtonFokus = () => {
    if (refToggle.current) {
      clear();
      setTitleButtonTimer("Começar");
      return;
    }

    setTitleButtonTimer("Pausar");

    const id = setInterval(() => {
      setSeconds(oldState => {
        if (oldState === 0) {
          clear();
          return typeTimer.time;
        }
        return oldState - 1;
      });
    }, 1000)

    refToggle.current = id;
  }

  return (
    <View
      style={styles.container}
    >
      <Stack.Screen
        options={{
          title: "",
        }}
      />

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
              onPress={() => toogleTypeTimer(t)}
            >
              {t.display}
            </ActionButton>
          ))}
        </View>

        <Timer
          totalSeconds={seconds}
        />

        <FokusButton
          onPress={toggleButtonFokus}
          icon={titleButtonTimer === "Começar" ? <IconStart></IconStart> : <IconPause></IconPause>}
        >
          {titleButtonTimer}
        </FokusButton>

      </View>

      <View>
        <Text style={styles.footer_text}>
          Projeto feito para estudos
        </Text>
        <Text style={styles.footer_text}>
          Desenvolvido por Rodrigo
        </Text>
      </View>

    </View >
  );
}


