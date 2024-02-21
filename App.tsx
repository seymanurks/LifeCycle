import React, {useState, useEffect} from "react";
import {SafeAreaView, View, Text, Button, BackHandler} from "react-native"

const App = () => {
  const[helloFlag, setHelloFlag] = useState(true)
  //console.log("render")

function updateFlag() {
    setHelloFlag(!helloFlag)
} 

  return(
    <SafeAreaView>
      {helloFlag && <Hello/>}
      <Button title = "Log in" onPress={updateFlag}></Button>
    </SafeAreaView>
  )
}

export default App;

function Hello() {
  useEffect(() => {
    console.log("Oluşturuldu")

    return () => {
      console.log("Silindi")
    }
  }, []);
  
  return(
    <View style = {{backgroundColor: "deepskyblue", padding: 10}}>
      <Text style = {{color: "white", fontSize: 17, fontWeight: "bold"}}>Welcome</Text>
    </View>
  )
}