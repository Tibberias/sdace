import { StyleSheet } from "react-native";
export default style = StyleSheet.create({

    /*

        borderWidth: 2,
        borderColor: '#FFF',

        marginBottom: 'auto',
        marginTop: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',

    */

    images: {
       maxHeight: '100%',
       minWidth: '100%',
       maxWidth: '100%',
     },
 
 
 
     fontText: {
       color: '#FFF',
     },

    background: {
        height: '100%',
        width: '100%',
        backgroundColor: '#2D2D2D',
        flex: 1,
        position: 'relative',
    },

    topBar: {
        height: 120,
        zIndex: 4,

        position: 'absolute', 
        left: 0, 
        right: 0, 
        top: 0
    },

    topInteractive: {
        height: 80,
        width: '100%',
        backgroundColor: '#2D2D2D',

        paddingBottom: 10,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
    },

    topGradient: {
        height: 40,
    },

    icons: {
        height: 55,
        width: '20%',

        marginBottom: 'auto',
        marginTop: 'auto',
    },

    icons2: {
        height: 40,
        width: '20%',

        marginBottom: 'auto',
        marginTop: 'auto',
    },

    spaceBar: {
        height: '100%',
        width: '60%',
    },

    closeWindow : {
        height: 120,

        position: 'absolute', 
        left: 0, 
        right: 0, 
        top: 0,
        zIndex: 5,
    },

    content: {
        minHeight:1000,
        height: 'auto',
        width: '100%',
        display: 'flex',
    },
    
    buscarSquare: {
        height: 100,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',

        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 100,
    },

    borderBuscar:{
        height: 60,
        width: '65%',

        borderWidth: 2,
        borderColor: '#FFF',

        borderBottomLeftRadius: 30,
        borderTopLeftRadius: 30,
        borderBottomRightRadius: 30,
        borderTopRightRadius: 30,

        marginBottom: 'auto',
        marginTop: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        flexDirection: 'row',

        fontSize: 30,
        color: '#FFF',
    },

    inputBuscar:{
        height: '100%',
        width: '80%',

        paddingBottom: 10,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
    },

    submitBuscar: {
        width: '20%',
        height: '100%',
        backgroundColor: '#FFF',

        borderBottomRightRadius: 30,
        borderTopRightRadius: 30,
    },

    add: {
        height: 60,
        width: 60,
        backgroundColor: '#FFF',

        marginBottom: 'auto',
        marginTop: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',

        borderBottomLeftRadius: 30,
        borderTopLeftRadius: 30,
        borderBottomRightRadius: 30,
        borderTopRightRadius: 30,

        display: 'flex'
    },

    addPlus: {
        fontSize:35, 
        color:'#2D2D2D',
        
        marginBottom: 'auto',
        marginTop: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto', 
    },
});