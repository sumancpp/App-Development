import { useState } from "react";
import { Text, View, StyleSheet, Button, Alert, Switch, ScrollView,
 TextInput, Pressable, Image, 
 ImageBackground} from "react-native";

function HomeScreen(){
  
  const [isEnable, setisEnable] = useState(false)
  const toggleSwitch = () => setisEnable((previousState) => !previousState)

  const pressMe = () => {
    Alert.alert("Button Clicked");
  }
  return(
    <ScrollView>
      {/* {[...Array(60)].map((_, i) => (
        <Text key={i} style={{fontSize:20 }}>Hello I am Suman Maity,{i + 1}</Text>
      ))} */}
     
      {/* <Button title="Click Me" onPress={pressMe}/>
      <Switch
      value={isEnable}
      onValueChange={toggleSwitch}
      /> */}

      {/* <TextInput 
      keyboardType="email-address"

  style={{ 
    borderWidth: 1, 
    borderColor: 'gray', 
    height: 40, 
    paddingHorizontal: 10 ,
  }} 
  placeholder="Type here..."
/>

<Pressable onPress={pressMe}>
  <Text>Hi I am Pressable</Text>
</Pressable> */}


{/* <Image
source={{
  uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTulcuAnYpbLBGRJlau2476cXdLU1oIJnDsbmYPeOnLLv861YpLl7lz0ZY&s"
}}
style = {{
  height: 350,
  width : 350
}}
/> */}

<ImageBackground
source={{
  uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTulcuAnYpbLBGRJlau2476cXdLU1oIJnDsbmYPeOnLLv861YpLl7lz0ZY&s"
}}
/>

    </ScrollView>
  )
}

export default HomeScreen;