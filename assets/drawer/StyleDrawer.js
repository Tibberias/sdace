import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import { 
    DrawerContentScrollView, 
    DrawerItemList } from '@react-navigation/drawer';

function DrawerCustom(props) {
    return(
        <View style={{flex: 1, backgroundColor: '#AAA'}}>
            <DrawerContentScrollView {...props}>
                <View
                    style={{
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: 5,
                        marginBottom: 10
                    }}
                >
                    <Image
                        style={{
                            width: 100,
                            height: 100,
                            borderRadius: 50,
                            marginBottom: 10
                        }}
                        source={{uri: 'https://adolfobocchi.github.io/img/adolfo.jpg'}}
                    />
                    <View
                        style={{
                            position: 'absolute',
                            right: 70,
                            bottom: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 5,
                            marginBottom: 10,
                            height: 30,
                            width: 30,
                            borderRadius: 15,
                            backgroundColor: '#900'
                        }}
                        
                    >
                        <Icon name='settings' size={20} color='#FFF' onPress={() => Alert.alert('teste')} />
                    </View>
                    <View>
                        <Text
                            style={{
                                textAlign: 'center',
                                color: '#FFF',
                                fontWeight: '600',
                                fontSize: 16

                            }}
                        >Adolfo Bocchi</Text>
                    </View>
                </View>
                <DrawerItemList {...props} />
                <TouchableOpacity>
                    <Text style={{textAlign: 'center', color: '#900'}}>
                        {' '}versão 1.0.0
                    </Text>
                </TouchableOpacity>
            </DrawerContentScrollView>
        </View>
    )
}

export default DrawerCustom;