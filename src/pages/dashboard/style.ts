import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    containerSearch:{
        width: '90%',
        height: 40,

        marginTop: 35,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,

        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderTopWidth: 1,
        borderRightWidth: 1,

        borderRadius: 10
    },

    textInputSearch:{
        width: '90%',
        height: 60
    },

  

    title: {
        fontSize: 25, 
        color: '#00ADE0',
        marginTop: 20
    },

    containerFlatList:{
        marginTop: 50,
        width: '90%',
        
        padding: 15,
    },

    containerBottonMenu:{
        width: 145,
        height:145,
        borderRadius: 10,

        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: 'red',

        padding: 8,
        margin: 10

       
    },

    textButtonMenu:{
        color: '#fff',
        textAlign: 'justify',
        justifyContent: 'center',
        marginBottom: 20,
        fontSize: 17,
        marginLeft: 8
    },

    viewMenu:{
        flex:1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginTop: 10
    },

    buttonInButtonMenu:{
        marginLeft: 45
    },


    picker:{
        width: '90%',
        height: 50,

        
    }


})

export default styles

