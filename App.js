
import {React, useState,useEffect} from 'react';
import { StyleSheet, Text,Button,TextInput,StatusBar,TouchableHighlight, Platform,View,Image,Alert,ImageBackground, SafeAreaView } from 'react-native';
// import ButtonResponse from './components/ButtonResponse.js';

const names=['green','red','pink','blue']

export default function App() {
  const [color,setColor]=useState('green')
  const [showMessage,setShowMessage]=useState(false)
  const [text, onChangeText] = useState('Useless Text');
  const b=4
  const c=7
  const d=b+c

  const handlePress=()=>{
    console.log("pressed ooooo")
  }
  console.log("app executed")
  const myNames=names.map((name)=>{return <Text onPress={(e)=>setColor(e._dispatchInstances.memoizedProps.children)}>{name}</Text>})
  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <Text numberOfLines={5} onPress={()=>handlePress()}>Hallo world, How are you.Good A really really long text, make this longer and see what happens</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="useless placeholder"
        // keyboardType="numeric"
      />
     {/* <ImageBackground source={{
        // width:200,
        // height:300,
        uri:"https://picsum.photos/200/300"}}> */}

      <Image source={require("./assets/favicon.png")}/>
      <TouchableHighlight onPress={()=>console.log("image tapped")}>
      <Image 
      blurRadius={5}
      fadeDuration={1000}
      source={{
        width:200,
        height:300,
        uri:"https://picsum.photos/200/300"}}/>

      </TouchableHighlight>
      <View style={{width:200,height:70,backgroundColor:`${color}`}}>
        <Text>{d}</Text>
      </View>
      <Button color="green" style={{color:"green"}} title="Click" onPress={()=>alert("button tapped")}/>
      {showMessage ? <Text>Howdy</Text> : <Text>Wimwega</Text>}
      <Button color="green" style={{color:"green"}} title="Texts show" onPress={()=>setShowMessage(true)}/>

      <Button color="green" style={{color:"green"}} title="Click" onPress={()=>Alert.alert("mytitle","My message",
      [{text:"Yes", onPress:()=>console.log("Yes")},{text:"No", onPress:()=>console.log("No")}])}/>
      
      <Button  title="Click me" onPress={()=> Alert.prompt("mytitle","My message",
      //  text => console.log(text)
       )}
       /> 
       {myNames}
       <Text>{color}</Text>
      <StatusBar style="auto" />
      {/* <ButtonResponse/> */}
      {/* </ImageBackground> */}
      
    </SafeAreaView>
  );
}
const containerStyle={backgroundColor:"orange"}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});