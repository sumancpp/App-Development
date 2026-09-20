import { useState } from "react";
import { Text, View, StyleSheet, Button, Alert, Switch, ScrollView,
 TextInput, Pressable, Image, 
 ImageBackground,
 FlatList} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function HomeScreen(){
  
  const [isEnable, setisEnable] = useState(false)
  const toggleSwitch = () => setisEnable((previousState) => !previousState)

  const pressMe = () => {
    Alert.alert("Button Clicked");
  }

  const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];


  return(
    <SafeAreaView>
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

{/* <ImageBackground
source={{
  uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTulcuAnYpbLBGRJlau2476cXdLU1oIJnDsbmYPeOnLLv861YpLl7lz0ZY&s"
}}
style = {{
  height: 350,
  width : 350
}}
/> */}


<FlatList
data={DATA}
keyExtractor={item => item.id}
renderItem={({item}) => <Text>{item.id}</Text>}
/>

    </SafeAreaView>
  )
}

export default HomeScreen;