import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import style  from '../style/basic'
import homeStyle  from '../style/home'
import profileStyle  from '../style/profile'
import LinearGradient from 'react-native-linear-gradient';
import profile from '../style/profile';

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
                            style={[style.fontText, profileStyle.textFollow]}>
                                199
                            </Text>
                        </View>
                        <View
                        style={[profileStyle.contentFolow, {borderBottomWidth:0}]}>
                            <Text
                            style={[style.fontText, profileStyle.textFollow, {fontSize: 16}]}>
                                AMIGOS
                            </Text>
                        </View>
                    </View>

                    <View style={profileStyle.squareFollow}>
                        <View
                        style={profileStyle.contentFolow}>
                            <Text
                            style={[style.fontText, profileStyle.textFollow]}>
                                199
                            </Text>
                        </View>
                        <View
                        style={[profileStyle.contentFolow, {borderBottomWidth:0}]}>
                            <Text
                            style={[style.fontText, profileStyle.textFollow, {fontSize: 16}]}>
                                FICHAS
                            </Text>
                        </View>
                    </View>

                    <View style={profileStyle.squareFollow}>
                        <View
                        style={profileStyle.contentFolow}>
                            <Text
                            style={[style.fontText, profileStyle.textFollow]}>
                                199
                            </Text>
                        </View>
                        <View
                        style={[profileStyle.contentFolow, {borderBottomWidth:0}]}>
                            <Text
                            style={[style.fontText, profileStyle.textFollow, {fontSize: 16}]}>
                                CAMPANHAS
                            </Text>
                        </View>
                    </View>

                </View>
                <View
                style={profileStyle.contentProfile}>
                    <View
                    style={profileStyle.menuProfile}>
                        <TouchableOpacity
                        style={profileStyle.squareProfile}>

                            <Text
                            style={profileStyle.textMenuProfile}>Publicações</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={profileStyle.squareProfile}>

                            <Text
                            style={profileStyle.textMenuProfile}>Campanhas</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={profileStyle.squareProfile}>

                            <Text
                            style={[style.fontText, profileStyle.textMenuProfile]}>Mural</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
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
                </View>
            </View>
        </ScrollView>
    )


}

export default Home;