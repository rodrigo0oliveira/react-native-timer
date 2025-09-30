import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor:"#021123",
      gap:40
    },
    actions:{
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"#14448080",
      height:268,
      width:"80%",
      borderWidth:2,
      borderRadius:32,
      borderColor:"#144480",
      gap:32,
      padding:24
    },
    timer:{
      color:"#FFFFFF",
      fontWeight:"bold",
      fontSize:54,
    },
    pressable:{
      width:"80%",
      backgroundColor:"#B872FF",
      height:43,
      padding:8,
      borderRadius:32,
      justifyContent:"center"
    },
    pressable_text:{
      textAlign:"center",
      color:"#021123",
      fontSize:18,
      fontWeight:"bold"
    },
    footer:{
      width:"80%"
    },
    footer_text:{
      color:"#98A0A8",
      textAlign:"center"
    }
});

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Image
        source={require("./images/focus.png")}
      >
      </Image>

      <View
        style={styles.actions}
      >

        <Text
          style={styles.timer}
        >
          25:00
        </Text>

        <Pressable
          style={styles.pressable}
        >
          <Text
            style={styles.pressable_text}
          >
            Começar
          </Text>
        </Pressable>
        
      </View>

      <View>
        <Text style={styles.footer_text}>
          Projeto fictício e sem fins comerciais.
        </Text>
        <Text style={styles.footer_text}>
          Desenvolvido por Alura. 
        </Text>
      </View>

    </View>
  );
}


