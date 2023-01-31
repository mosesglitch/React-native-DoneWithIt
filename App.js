import { StatusBar } from 'expo-status-bar';
import {React, useState,useEffect} from 'react';
import { StyleSheet, Text,Button,TouchableHighlight, View,Image,Alert, SafeAreaView } from 'react-native';
// import ButtonResponse from './components/ButtonResponse.js';

const names=['green','red','pink','blue']

export default function App() {
  const [color,setColor]=useState('green')
  const [showMessage,setShowMessage]=useState(false)

  const b=4
  const c=7
  const d=b+c

  const handlePress=()=>{
    console.log("pressed ooooo")
  }
  console.log("app executed")
  const myNames=names.map((name)=>{return <Text onPress={(e)=>setColor(e._dispatchInstances.memoizedProps.children)}>{name}</Text>})
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={5} onPress={()=>handlePress()}>Hallo world, How are you.Good A really really long text, make this longer and see what happens</Text>
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

      {/* <Button color="green" style={{color:"green"}} title="Click" onPress={()=>Alert.alert("mytitle","My message",
      [{text}])}/> */}
       {myNames}
       <Text>{color}</Text>
      <StatusBar style="auto" />
      {/* <ButtonResponse/> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
