import { useNavigation } from '@react-navigation/native';
import { Text, SafeAreaView, StyleSheet,TouchableOpacity,Image,View } from 'react-native';



export default function Conf(){
const navi = useNavigation();


  return (
    <SafeAreaView style={styles.container}>

    <TouchableOpacity  onPress={() => navi.navigate('Home')}>
 <Image source={require('../assets/seta-esquerda.png')} style={styles.sta}>
   </Image>
   </TouchableOpacity>
<View style={styles.contai}>
<Image source={require('../assets/verificado.png')} style={styles.logo} ></Image>
</View>
      <Text style={styles.paragraph} >
        Sua compra foi Confirmada
        Obrigado por comprar nosso Protudo
      </Text>
       <Image source={require('../assets/feliz.png')} style={styles.img} ></Image>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#1A5D1A',
    padding: 8,
  },
  logo:{
   width:300,
   height:300,
  },
  img:{
    width:40,
   height:40,
  },
   sta:{
   width:40,
   height:40,
  },
  paragraph: {
    margin: 24,
    fontSize: 24,
    color:'#FAF2D3',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
