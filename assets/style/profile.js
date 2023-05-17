import { StyleSheet } from "react-native";
import { transformer } from "../../metro.config";
export default style = StyleSheet.create({
    backgroundProfile: {
        height: 300,
        width: '100%',
        backgroundColor: '#000',
        borderBottomWidth: 3,
        borderColor: '#FFF',
    },

    squareUserIcon: {
        height: 200,
        width: '100%',

        marginTop: -100,
    },

    circleUserIcon: {
        height: 150,
        width: 150,
        overflow: 'hidden',
        backgroundColor: '#FFF',

        borderWidth: 2,
        borderColor: '#FFF',

        marginBottom: 'auto',
        marginTop: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',

        borderBottomLeftRadius: 75,
        borderTopLeftRadius: 75,
        borderBottomRightRadius: 75,
        borderTopRightRadius: 75,
    },

    userName: {
        marginBottom: 'auto',
        marginTop: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',

        fontSize: 30,
        textTransform: 'uppercase',
    },

    containerFollow: {
        height: 100, 
        justifyContent:'space-around', 
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
    },

    squareFollow: {
        marginLeft: 10, 
        marginRight: 10, 
        width: 100
    },

    contentFolow: {
        height: '50%',
        borderBottomWidth: 5,
        borderColor: '#FFF',
    },

    textFollow: {

        textAlign:'center', 
        fontSize: 20, 

        marginBottom: 'auto',
        marginTop: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    contentProfile: {
        height: 'auto',
        width: '100%',
        flex: 1,
    },

    menuProfile: {
        height: 60,
        width: '100%',
        backgroundColor: '#FFF',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    
    squareProfile: {
        width: '33%',
    },

    textMenuProfile: {
        color: '#000',
        fontSize: 16,
        textTransform: 'uppercase',

        marginBottom: 'auto',
        marginTop: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
    }
})