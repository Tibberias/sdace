import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import style  from '../style/basic'
import homeStyle  from '../style/home'
import LinearGradient from 'react-native-linear-gradient';

const Home = ({proapsChat}) => {
    return(
      <ScrollView>
            <View
            style={style.content}>
              <View
              style={style.buscarSquare}>
                <View
                  style={style.borderBuscar}>
                  <TextInput
                  style={style.inputBuscar}
                  placeholder='Buscar...'
                  placeholderTextColor="#FFF" >

                  </TextInput>
                  <View
                  style={style.submitBuscar}></View>
                </View>
                <TouchableOpacity
                style={style.add}>
                  <Text 
                  style={style.addPlus}>+</Text>
                </TouchableOpacity>

              </View>
              <View
              style={homeStyle.boxCapanhas}>
                  <View
                  style={homeStyle.campanha}>
                
                    <Image
                    style={style.images}
                    source={require('../images/usuarios/campanhas/brabo.jpg')}>
                    </Image>
                    <LinearGradient
                    style={homeStyle.campanhaDegrade}
                    colors={['#2d2d2d00', '#900']}/>
                    <TouchableOpacity
                    style={[homeStyle.titleCampanha, {backgroundColor: '#900'}]}
                    onPress={proapsChat}>
                    <Text
                    style={[style.fontText, {fontSize: 18}]}>
                    A FUGA DOS ORCS
                    </Text>
                    </TouchableOpacity>
                  </View>

                  <View
                  style={homeStyle.campanha}>
                
                    <Image
                    style={style.images}
                    source={require('../images/usuarios/campanhas/robo.png')}>
                    </Image>
                    <LinearGradient
                    style={homeStyle.campanhaDegrade}
                    colors={['#2d2d2d00', '#009']}/>
                    <TouchableOpacity
                    style={[homeStyle.titleCampanha, {backgroundColor: '#009'}]}
                    onPress={proapsChat}>
                    <Text
                    style={[style.fontText, {fontSize: 18}]}>
                    A INVASÃO DOS ROBOS
                    </Text>
                    </TouchableOpacity>
                  </View>

                  <View
                  style={homeStyle.campanha}>
                
                    <Image
                    style={style.images}
                    source={require('../images/usuarios/campanhas/velho.png')}>
                    </Image>
                    <LinearGradient
                    style={homeStyle.campanhaDegrade}
                    colors={['#2d2d2d00', '#090']}/>
                    <TouchableOpacity
                    style={[homeStyle.titleCampanha, {backgroundColor: '#090'}]}
                    onPress={proapsChat}>
                    <Text
                    style={[style.fontText, {fontSize: 18}]}>
                    IRMÃOS SILVA
                    </Text>
                    </TouchableOpacity>
                  </View>

            </View>

            </View>
        </ScrollView>
    )
    
}

export default Home;