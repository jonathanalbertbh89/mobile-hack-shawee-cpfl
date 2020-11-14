import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    textInput:{
        width: '85%',
        height: 55,

        borderRadius: 10,

        borderColor: '#a6a6a6',
        borderBottomWidth: 2,
        borderLeftWidth: 2,
        borderTopWidth: 2,
        borderRightWidth: 2,

        marginTop: 35
        
    },

    title: {
        fontSize: 25, 
        color: '#00ADE0',
        marginTop: 20
    },

    containerScrollView:{
        marginTop: 50,
        width: '90%',
        padding: 10,
        
        

        borderBottomWidth: 2,
        borderLeftWidth: 2,
        borderTopWidth: 2,
        borderRightWidth: 2,
    },

    containerBottonMenu:{
        width: 120,
        height:120,
        borderRadius: 10,

        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: 'red',

        padding: 10

       
    },

    textButtonMenu:{
        color: '#fff',
        textAlign: 'center'
    },

    viewMenu:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },


})

export default styles

