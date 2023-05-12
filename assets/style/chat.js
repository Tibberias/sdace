import { StyleSheet } from "react-native";
export default style = StyleSheet.create({

    iconsChat: {
        height: 50,

        marginBottom: 'auto',
        marginTop: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    boxChat: {
        marginTop: 100,
        height: 'auto',

        paddingBottom: 20,
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
    },
    lineMensage: {
        display: 'flex',
        marginBottom: 10,
        marginTop: 10,
        alignItems: 'flex-start'
    },
    borderMensage: {
        height: 'auto',
        minHeight: 60,
        minWidth: 100,
        maxWidth: 250,

        //marginLeft: 'auto',

        borderWidth: 2,
        borderColor: '#FFF',

        borderBottomRightRadius: 15,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,

        paddingBottom: 10,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10
    },

    playBar: {
        height: 70,
        width: '100%',
        backgroundColor: '#2D2D2D',

        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
        position: 'absolute', 
        marginBottom: 5,

        left: 0, 
        right: 0, 
        bottom: 0,
    },

    buttonVisualiza: {
        height: 50,
        width: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        borderWidth: 2,
        borderColor: '#FFF',

        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,

        marginBottom: 'auto',
        marginTop: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
});