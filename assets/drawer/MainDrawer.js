import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import style  from '../style/basic'
import LinearGradient from 'react-native-linear-gradient';

const MainDrawer = ({proapsProfile, proapsHome}) => {
    return(
        <View
        style={style.topBar}>
          <View
          style={style.topInteractive}>
        
            <Image
            style={style.icons}
            source={require('../images/dice.png')}
            resizeMode='contain'>
            </Image>

            <TouchableOpacity
            style={{height: 50, width: 50, backgroundColor: '#587'}
            }
            onPress={proapsProfile}
            />

            <TouchableOpacity
            style={{height: 50, width: 50, backgroundColor: '#378'}
            }
            onPress={proapsHome}
            />
        
            <View
            style={style.spaceBar}>
            
            </View>
        
            <Image
            style={style.icons2}
            source={require('../images/menuBar.png')}
            resizeMode='contain'>
            
            </Image>
        
            <TouchableOpacity>
            </TouchableOpacity>
          </View>
          <LinearGradient
          style={style.topGradient}
          colors={['#2D2D2D', '#2d2d2d00']}>
          </LinearGradient>
        </View>
    )
}

export default MainDrawer;