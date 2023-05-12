//npm install react-native-linear-gradient --saveimport React from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import style  from './assets/style/basic'
import homeStyle  from './assets/style/home'
import MainDrawer from './assets/drawer/MainDrawer';
import Home from './assets/screens/Home.js'
import Chat from './assets/screens/Chat.js'
import Profile from './assets/screens/Profile.js'
import Friends from './assets/screens/Friends.js'
import { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Drawer from './assets/drawer/MainDrawer';

// Alert.alert('teste')

function App() {
  const [homeScreen, setHome] = useState(true);
  const [chatScreen, setChat] = useState(false);
  const [profileScreen, setProfile] = useState(false);
  const [friendsScreen, setFriends] = useState(false);

  function startHome(){
    setHome(true),
    setChat(false),
    setProfile(false),
    setFriends(false)
  }

  function startChat(){
    setHome(false),
    setChat(true),
    setProfile(false),
    setFriends(false)
  }

  function startProfile(){
    setHome(false),
    setChat(false),
    setProfile(true),
    setFriends(false)
  }

  function startFriends(){
    setHome(false),
    setChat(false),
    setProfile(false),
    setFriends(true)
  }
  

  return(
    <View
    style={style.background}>
      { homeScreen && 
        <Home proapsChat={startChat} proapsHome={startHome}/>
      }
      { chatScreen && 
        <Chat/>
      }
      { profileScreen && 
        <Profile/>
      }
      { friendsScreen && 
        <Friends/>
      }
      
      <View>
      </View>
        <MainDrawer proapsProfile={startProfile}></MainDrawer>
    </View>
  )
};

export default App;
