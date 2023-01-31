import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,TouchableWithoutFeedback, View,Image, SafeAreaView } from 'react-native';

export default function App() {
  let x=1
  const handlePress=()=>{
    console.log("pressed ooooo")
  }
  console.log("app executed")
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={5} onPress={()=>handlePress()}>Hallo world, How are you.Good A really really long text, make this longer and see what happens</Text>
      <Image source={require("./assets/favicon.png")}/>
      <TouchableWithoutFeedback onPress={()=>console.log("image tapped")}>
      <Image 
      blurRadius={5}
      fadeDuration={1000}
      source={{
        width:200,
        height:300,
        uri:"https://picsum.photos/200/300"}}/>

      </TouchableWithoutFeedback>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
