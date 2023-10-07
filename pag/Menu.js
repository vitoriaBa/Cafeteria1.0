import { Text, SafeAreaView, StyleSheet, ScrollView,View,Image,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Menu() {
  const navi = useNavigation();
    
 
  return (
    <SafeAreaView style={styles.container}>
 
   <TouchableOpacity  onPress={() => navi.navigate('Home')}>
 <Image source={require('../assets/seta-esquerda.png')} style={styles.sta}>
   </Image>
   </TouchableOpacity>
      <Text style={styles.paragraph}>Menu</Text>
      <ScrollView>

  <View style={styles.row}>

<View style={styles.caixa}>
        <View style={styles.cxFoto}>
      <Image source={require('../assets/ca.png')} style={styles.img}>
   </Image>
          </View>
          <Text style={styles.subtitulo}>
          Sorvete
           </Text>
           <TouchableOpacity style={styles.botao}
                onPress={() => navi.navigate('conf')}>
            <Text style={styles.textbotao} >Compra</Text>
           </TouchableOpacity>
</View>

<View style={styles.caixa}>
        <View style={styles.cxFoto}>
          <Image source={require('../assets/cafe.png')} style={styles.img}>
   </Image>
          </View>
          <Text style={styles.subtitulo}>
          Cafezinho
           </Text>
             <TouchableOpacity style={styles.botao}
                  onPress={() => navi.navigate('conf')}>
 <Text style={styles.textbotao} >Compra</Text>
            </TouchableOpacity>
</View>
</View>
  <View style={styles.row}>
<View style={styles.caixa}>
           <View style={styles.cxFoto}>
          <Image source={require('../assets/cuck.png')} style={styles.img}>
   </Image>
          </View>
          <Text style={styles.subtitulo}>
          Cookie
           </Text>
             <TouchableOpacity style={styles.botao}
            onPress={() => navi.navigate('conf')}>
            <Text style={styles.textbotao} >Compra</Text>
           </TouchableOpacity>
</View>

<View style={styles.caixa}>
  <View style={styles.cxFoto}>
          <Image source={require('../assets/rosca.png')} style={styles.img}>
   </Image>
          </View>
          <Text style={styles.subtitulo}>
          Rosquinha
           </Text>
             <TouchableOpacity style={styles.botao}
              onPress={() => navi.navigate('conf')}>
            <Text style={styles.textbotao} >Compra</Text>
           </TouchableOpacity>
</View>
</View>
<View style={styles.row}>
<View style={styles.caixa}>
           <View style={styles.cxFoto}>
          <Image source={require('../assets/cupcake.png')} style={styles.img}>
   </Image>
          </View>
          <Text style={styles.subtitulo}>
          Cupcake
           </Text>
             <TouchableOpacity style={styles.botao}
                onPress={() => navi.navigate('conf')}>
            <Text style={styles.textbotao} >Compra</Text>
           </TouchableOpacity>
</View>

<View style={styles.caixa}>
  <View style={styles.cxFoto}>
          <Image source={require('../assets/sonho.png')} style={styles.img}>
   </Image>
          </View>
          <Text style={styles.subtitulo}>
          Sonho
           </Text>
             <TouchableOpacity style={styles.botao}
                onPress={() => navi.navigate('conf')}>
            <Text style={styles.textbotao} >Compra</Text>
           </TouchableOpacity>
</View>
</View>
<View style={styles.row}>
<View style={styles.caixa}>
           <View style={styles.cxFoto}>
          <Image source={require('../assets/torta.png')} style={styles.img}>
   </Image>
          </View>
          <Text style={styles.subtitulo}>
          Torta
           </Text>
             <TouchableOpacity style={styles.botao}
                onPress={() => navi.navigate('conf')}>
            <Text style={styles.textbotao} >Compra</Text>
           </TouchableOpacity>
</View>

<View style={styles.caixa}>
  <View style={styles.cxFoto}>
          <Image source={require('../assets/viagen.png')} style={styles.img}>
   </Image>
          </View>
          <Text style={styles.subtitulo}>
          Cafe para viagem
           </Text>
             <TouchableOpacity style={styles.botao}
                onPress={() => navi.navigate('conf')}>
            <Text style={styles.textbotao} >Compra</Text>
           </TouchableOpacity>
</View>
</View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#186F65',
    padding: 5,
   
  },
  textbotao: {
fontSize:26,
color:'#186F65',
  },
  paragraph: {    
    fontSize: 38,
    textAlign: 'center',
     color:'#F6EEC9',
  },
  sta:{
  marginLeft:10,
  marginTop:30,
   width:40,
   height:40,
  },
  img: {
    width:150,
    height:100, 
  },
 row:{
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: 20, 
 },
  botao:{
    flex:1,
   fontWeight:'bold',
   backgroundColor:'#B5CB99',
   alignItems:'center',
   justifyContent:'center',
   width:100,
   height:30,
  },
  cxFoto: {
    margintop:10,
    margin:5,
    alignItems:"center",  
  },
  caixa:{
   flex:1,
   justifyContent:'center',
   alignItems:'center',
    borderStyle:'solid',
    borderWidth:5,
    borderRadius:35,
    margin:5,
    padding:20,
    borderColor:'#B2533E',
  },
   subtitulo: {
    fontSize:20,
    margin:12,
    color:'#F6EEC9',
  },
});
