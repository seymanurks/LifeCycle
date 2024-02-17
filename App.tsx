import React, {useState, useEffect} from "react";
import {SafeAreaView, View, Text, Button} from "react-native"

const App = () => {
  const[number, setNumber] = useState(0)
  //console.log("render")

  useEffect(() => {
    console.log("number updated")
  },[number])

  useEffect(() => {
    console.log("mounting")
  }, [])

  return(
    <SafeAreaView>
      <Text>Number {number}</Text>
      <Button title = "INCREASE" onPress={() => setNumber(number + 1)}></Button>
    </SafeAreaView>
  )
}

export default App;