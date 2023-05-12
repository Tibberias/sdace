import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import style  from '../style/basic'
import profileStyle  from '../style/profile'
import LinearGradient from 'react-native-linear-gradient';

const Home = ({proapsChat}) => {
    return(
        <ScrollView>
            <View>
                <View
                style={profileStyle.backgroundProfile}>
                    <Image
                    source={require('../images/usuarios/perfil/fundos/astro.jpeg')}
                    resizeMode='cover'
                    style={style.images}/>
                </View>

                <View
                style={profileStyle.squareUserIcon}>
                    <View
                    style={profileStyle.circleUserIcon}>
                        <Image
                        source={require('../images/usuarios/perfil/fotos/anna.jpg')}
                        resizeMode='cover'
                        style={style.images}/>
                    </View>
                </View>
                <View
                style={{height: 50,}}>
                    <Text
                    style={[style.fontText, profileStyle.userName]}>
                        @Tibberias
                    </Text>
                </View>
                <View
                style={profileStyle.containerFollow}>

                    <View style={profileStyle.squareFollow}>
                        <View
                        style={profileStyle.contentFolow}>
                            <Text
                            style={[style.fontText, {textAlign:'center', fontSize: 20, height: '100%', backgroundColor: '#000'}]}>
                                199
                            </Text>
                        </View>
                        <View
                        style={[profileStyle.contentFolow, {borderBottomWidth:0}]}>
                            <Text
                            style={[style.fontText, {textAlign:'center', fontSize: 20, height: '100%', backgroundColor: '#000'}]}>
                                199
                            </Text>
                        </View>
                    </View>

                    <View style={profileStyle.squareFollow}>
                        <View
                        style={profileStyle.contentFolow}>
                            <Text
                            style={[style.fontText, {textAlign:'center', fontSize: 20, height: '100%', backgroundColor: '#000'}]}>
                                199
                            </Text>
                        </View>
                        <View
                        style={[profileStyle.contentFolow, {borderBottomWidth:0}]}>
                            <Text
                            style={[style.fontText, {textAlign:'center', fontSize: 20, height: '100%', backgroundColor: '#000'}]}>
                                199
                            </Text>
                        </View>
                    </View>

                    <View style={profileStyle.squareFollow}>
                        <View
                        style={profileStyle.contentFolow}>
                            <Text
                            style={[style.fontText, {textAlign:'center', fontSize: 20, height: '100%', backgroundColor: '#000'}]}>
                                199
                            </Text>
                        </View>
                        <View
                        style={[profileStyle.contentFolow, {borderBottomWidth:0}]}>
                            <Text
                            style={[style.fontText, {textAlign:'center', fontSize: 20, height: '100%', backgroundColor: '#000'}]}>
                                199
                            </Text>
                        </View>
                    </View>

                </View>
            </View>
        </ScrollView>
    )
    
}

export default Home;