import { StyleSheet } from  'react-native'

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',

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

    containerCheckBox:{
        marginTop: 50,
        width: '90%',
        height: 80,
        justifyContent: 'center',
       
    },

    containerCheckBoxAndText:{
        
        flexDirection: 'row',
        

    },

    textCheckBox:{
        fontSize: 18, 
        justifyContent: 'center'
    },

    longText:{
        width: '90%',
        height: 182,
        marginTop: 31,


        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderTopWidth: 1,
        borderRightWidth: 1,

        borderRadius: 10
    },

    containerButton:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        height: 60
    },

    buttonCancel:{
        width: 90,
        height: 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: '#C4B9B9',

        marginTop: 12
    },

    buttonSubmit:{
        width: 90,
        height: 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: '#80C342',

        marginTop: 12
    },

    textButton:{
        fontSize: 18,

    },

    picker:{
        width: '90%',
        height: 50
    }
})

export default styles