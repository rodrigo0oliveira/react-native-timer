import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const types = [
  {
    id:'focus',
    time:25,
    image:require("./images/focus.png"),
    display:'Foco'
  },
  {
    id:'short',
    time:5,
    image:require("./images/short.png"),
    display:'Pausa curta'
  },
  {
    id:'long',
    time:25,
    image:require("./images/long.png"),
    display:'Pausa longa'
  }
]

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

const stylesDivFokus = StyleSheet.create({
  container:{
    flexDirection:"row",
    width:"80%",
    justifyContent:"center"
  },
  text:{
    color:"#FFF",
    padding:8,
    fontSize:14
    
  },
  pressable:{
    backgroundColor:"#144480",
    borderRadius:8,
  }
});

function timeValue(time:number){
  const date = new Date(time*1000);
  return date.toLocaleTimeString("pt-BR",{ minute:"2-digit",second:"2-digit" })
}

export default function Index() {

  const [typeTimer,setTypeTimer] = useState(types[0]);

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

        <View style={stylesDivFokus.container}>
          {types.map((t)=> (
            <Pressable
              key={t.id}
              style={typeTimer.id === t.id ? stylesDivFokus.pressable : null}
              onPress={()=> setTypeTimer(t)}
            >
              <Text style={stylesDivFokus.text}>
                {t.display}
              </Text>
            </Pressable>
          ))}
        </View>

        <Text
          style={styles.timer}
        >
          {timeValue(typeTimer.time)}
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


