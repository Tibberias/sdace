import { Alert, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon1 from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/EvilIcons';
import style  from '../style/basic'
import chatStyle  from '../style/chat'


const Home = ({proapsChat}) => {
    return(
        <View>
            <View
            style={style.closeWindow}>
                <Image 
                source={require('../images/icons/close.png')}
                resizeMode='contain' 
                style={chatStyle.iconsChat}/>
            </View>
            <ScrollView
            style={{marginBottom:60}}>

                <View
                style={chatStyle.boxChat}>
                    <View
                    style={chatStyle.lineMensage}>
                        <View
                        style={chatStyle.borderMensage}>
                            <Text
                            style={style.fontText}>
                               Me vê meio kilo de whatsapp
                            </Text>
                        </View>
                    </View>

                    <View
                    style={chatStyle.lineMensage}>
                        <View
                        style={chatStyle.borderMensage}>
                            <Text
                            style={style.fontText}>
                                Qual foi tio
                            </Text>
                        </View>
                    </View>

                    <View
                    style={chatStyle.lineMensage}>
                        <View
                        style={chatStyle.borderMensage}>
                            <Text
                            style={style.fontText}>
                                Tpa me tirando rapá????
                            </Text>
                        </View>
                    </View>
                    
                    <View
                    style={chatStyle.lineMensage}>
                        <View
                        style={chatStyle.borderMensage}>
                            <Text
                            style={style.fontText}>
                                Critei caralhooooou
                            </Text>
                        </View>
                    </View>

                    <View
                    style={chatStyle.lineMensage}>
                        <View
                        style={[chatStyle.borderMensage, {marginRight: 0, marginLeft: 'auto', borderBottomRightRadius: 0, borderBottomLeftRadius: 10}]}>
                            <Text
                            style={style.fontText}>
                                Yasssssssssssssssss Queennn
                            </Text>
                        </View>
                    </View>

                    <View
                    style={chatStyle.lineMensage}>
                        <View
                        style={chatStyle.borderMensage}>
                            <Text
                            style={style.fontText}>
                                ASBFAUYFGSKYFGWJHFGBAJFGAUFBQKJNFAHFUAVSHABGHAGFUYABKjnfashbfahbfqabfbvvgvvghbhbfybfsbfsyUHGBSWYGBUWEFVUFVEEVFBFWEFWFEWEFWEFWEFWEFWEFWE
                            </Text>
                        </View>
                    </View>

                    <View
                    style={chatStyle.lineMensage}>
                        <View
                        style={[chatStyle.borderMensage, {marginRight: 0, marginLeft: 'auto', borderBottomRightRadius: 0, borderBottomLeftRadius: 10}]}>
                            <Text
                            style={style.fontText}>
                                Aff tirei 2
                            </Text>
                        </View>
                    </View>

                    <View
                    style={chatStyle.lineMensage}>
                        <View
                        style={[chatStyle.borderMensage, {marginRight: 0, marginLeft: 'auto', borderBottomRightRadius: 0, borderBottomLeftRadius: 10}]}>
                            <Text
                            style={style.fontText}>
                                Sifudeu MAKKAKAKAKAKKAKAKAKA
                            </Text>
                        </View>
                    </View>
                    
                    </View>

            </ScrollView>
            <View
            style={chatStyle.playBar}>
            <TouchableOpacity
            onPress={() => Alert.alert('COMENT')}>
                <Image
                source={require('../images/icons/info.png')}
                resizeMode='contain' 
                style={chatStyle.iconsChat}/>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => Alert.alert('VISUALIZE')}
            style={chatStyle.buttonVisualiza}>
                <Text
                style={[style.fontText, {fontSize: 18}]}>
                    VISUALIZAR FICHA
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => Alert.alert('COMENT')}>
                <Image 
                source={require('../images/icons/comment.png')}
                resizeMode='contain' 
                style={chatStyle.iconsChat}/>
            </TouchableOpacity>
            </View>
        </View>
    )
    
}

export default Home;