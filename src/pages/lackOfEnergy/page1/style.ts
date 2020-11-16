import { render } from 'react-dom'
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        
        alignItems: 'center',
        width: '100%',
        
    },

    containerStatus:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        height: 90,
        width: '90%',
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth:1,
        borderTopWidth: 1, 
        
        borderRadius: 20,
        padding: 10,

        marginTop: 30

    },

    
    containerStatus1:{
        alignItems: 'center',
        width: '50%'
    },

    containerStatus2:{
        alignItems: 'center',
        width: '50%'
    },

    div:{
        width: 2,
        height: 70,
        borderLeftWidth: 1,
        borderRightWidth: 1
    },

    textStatus:{
        fontSize: 18 ,
        
    },

    containerInf:{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 90,
        width: '90%',
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 50,
        

    },
    

    textInf:{
        fontSize: 18,
        color: '#00689C'
    },

    containerInfHors:{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 90,
        width: '90%',
        paddingLeft: 25,
        paddingRight: 25,
       
        
    },

    textInfHors:{
        fontSize: 30
    },

    textdiv:{
        fontSize: 30,
        color: '#00689C'
    },

    containerTextInput:{
        width: '90%',
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderRadius: 10,
        
     

    },

    textInput:{
        justifyContent: 'flex-start',
        width: '100%',
        height: 140,
        borderColor: '#C4B9B9',
        padding: 15,
        


    },
    icon:{
        marginLeft: '90%',
        marginBottom: 10

    },

    containerButton:{
        
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '90%',
        height: 60,
        marginTop: 20
    },

    buttonCancel:{
            width: 120,
            height: 50,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#C4B9B9',
            paddingLeft: 10,
            paddingRight: 10,


    },

    buttonSubmit:{
        width: 120,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#80C342'
    },

    textButton:{
        fontSize: 25,
        color: '#fff'
    },


    

    containerFalse:{
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
    

    },


    containerStatusFalse:{
        
        justifyContent: 'center',
        alignItems: 'center',

        height: 120,
        width: '100%',
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth:1,
        borderTopWidth: 1, 
        
        borderRadius: 20,
        padding: 10,

        marginTop: 30
    },

    containerStatus1false:{
        
    },

    containerStatus2false:{
        width: '100%',
        alignItems: 'center',
    },

    textStatusFalse:{
        fontSize: 25,
        marginBottom: 15,
        marginRight: 140

    },

    buttonStatusFalse:{
        width: '85%',
        height: 50,
        backgroundColor: '#FF0000', 
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
        
    },

    textButtonFalse:{
        fontSize: 22,
        color: '#fff'
    },

    textInfHorsFalse:{
        fontSize: 30,
        
    },

    containerInfHorFalse:{
        width: '70%',
        alignItems: 'center',
      
       flexDirection: 'row',
       justifyContent: 'space-between',
       marginBottom: 20,
       paddingLeft: 20,
       paddingRight: 20

      
    }

    
})

export default styles