import { Link, Stack } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Index() {
  return (
    <View>
      <Stack.Screen
        options={{
          title: "",
        }}
      />
      <Text>
        Hello World
      </Text>
      <Pressable>
        <Link href={{ pathname: "/timer" }}>
          Clique aqui
        </Link>

      </Pressable>
    </View>
  )
}