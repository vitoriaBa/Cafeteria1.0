import { useNavigation } from '@react-navigation/native';
import { Text, SafeAreaView, StyleSheet,TouchableOpacity,Image,ScrollView,TextInput } from 'react-native';



export default function Home(){
const navi = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>
    
   <Image source={require('../assets/6.jpg')} style={styles.logo}>
   </Image>

    <TouchableOpacity
    style={styles.botao}
    onPress={() => navi.navigate('Menu')}>
    <Text style={styles.textbutao}>Menu</Text>
    </TouchableOpacity>

    <TouchableOpacity
    style={styles.botao}
    onPress={() => navi.navigate('Cafe')}>
    <Text style={styles.textbutao}>Sobre</Text>
    </TouchableOpacity>
     </ScrollView>
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'#AF460F',
    padding: 0,
    paddingTop:140,
  },
  logo:{
    width:340,
    height:350,
  },
  botao:{
    flex:1,
    marginTop:20,
    marginLeft:53,
    alignItems:'center',
    width:230,
    padding:10,
    backgroundColor:'#6C3428',
    borderRadius:20,
  },
  textbutao:{
    fontSize:30,
    color:'#F6EEC9',
    fontWeight:'bold',
  }
 
});
