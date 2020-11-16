import { StyleSheet } from  'react-native'

const styles = StyleSheet.create({
    container:{
        
        justifyContent: 'center',
        alignItems: 'center',
    },

    containerReading:{
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',

        marginTop: 20
    },

    textReading:{
        fontSize: 18
    },

    textInputReading:{
        backgroundColor: '#e6e6e6',
        width: '55%',
        height: 45,

        borderRadius: 10,

        borderTopWidth: 1,
        borderEndWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,

        marginTop: 15,
        marginBottom: 15,

        paddingLeft: 8,
        fontSize: 20
        
    },

    buttonReading:{
        width: '40%',
        height: 45,

        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: '#80C342', 
        marginTop: 20
    },


    textButtonReading:{

        fontSize: 17

    }

})

export default styles