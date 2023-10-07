import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Cafe() {
  const navi = useNavigation();
  return (
       <View style={styles.tudo}>
   <TouchableOpacity  onPress={() => navi.navigate('Home')}>
 <Image source={require('../assets/seta-esquerda.png')} style={styles.sta}>
   </Image>
   </TouchableOpacity>
 
    <View style={styles.container}>
      <Image
        source={require('../assets/1.jpg')}
        style={styles.imagem}/>

      <View style={styles.textContainer}>

        <Text style={styles.titulo}>Café e Chá Juntos</Text>
        <Text style={styles.descricao}>
          Nossa cafeteria é o lugar perfeito para os amantes de café e chá.
          Oferecemos uma ampla seleção de bebidas deliciosas para satisfazer
          Vocé.
        </Text>
      </View>
    </View>

   <View style={styles.aa}>
        <Text style={styles.titulo}>Harmonia</Text>
        <Text style={styles.descricao}>
         é um espaço acolhedor e único que celebra a harmoniosa união entre o café e o chá. Com uma abordagem inovadora, oferecemos uma experiência sensorial excepcional para os amantes dessas duas bebidas tão apreciadas.
        </Text>
</View>
      <View style={styles.container}>
      <View style={styles.textContainer}>

        <Text style={styles.descricao}>
          é o local ideal para os apreciadores de café e chá que desejam explorar novos sabores e experiências. Venha nos visitar.
          </Text>
      </View>
       <Image
        source={require('../assets/2.jpg')}
        style={styles.imagem}/>
    </View>
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight:10,
 paddingLeftt:10,
    backgroundColor: '#AF460F',
   
  },
  tudo:{
    backgroundColor: '#AF460F',
  },
  aa:{
    fontSize: 18,
 color:'#F6EEC9',
 paddingRight:20,
 paddingLeftt:20,
 backgroundColor:'#AF460F',
  },
  imagem: {
    width: 200,
    height: 300,
  },
  textContainer: {
 flex: 1,
    marginLeft: 20,
      marginTop: 20,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FED39F',
  },
  descricao: {
    fontSize: 17,
    color: '#F6EEC9',
  },
  sta:{
  marginLeft:10,
  marginTop:30,
   width:50,
   height:50,
    backgroundColor: '#AF460F',
  },
});

