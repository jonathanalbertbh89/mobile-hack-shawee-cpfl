import React from 'react';
import { Picker, ScrollView, View, Text, TextInput} from 'react-native';
import { FlatList, RectButton } from 'react-native-gesture-handler';

import {Feather} from '@expo/vector-icons'


import style from './style'
import { useNavigation } from '@react-navigation/native';

const Dashboar: React.FC = () => {

    const navigation = useNavigation()
    function handleSpending(){
        navigation.navigate('Spending')
    }
    function handleLackOfEnergy(){
        navigation.navigate('LackOfEnergyPage1')
    }
    function handleDoubtsComplaints(){
        navigation.navigate('DoubtsComplaints')
    }
    function handleReconnectPower(){
        navigation.navigate('ReconnectPower')
    }

    const data = [
        {id: "00", icons: 'dollar-sign', text: 'Previsão de gasto e Orçamento', color: '#FF0000', function: handleSpending},
        {id: "01", icons: 'activity', text: 'Falta de energia', color: '#80C342', function: handleLackOfEnergy},
        {id: "02", icons: 'thumbs-up', text: 'Duvidas e reclamações', color: '#00ADE0', function: handleDoubtsComplaints},
        {id: "03", icons: 'repeat', text: 'Religar Energia', color: '#F68C1F', function: handleReconnectPower},
    
        ]   

        const columns = 2;

    return(
        <View style={style.container}>
            <View style={style.containerSearch}>
                <TextInput 
                    style={style.textInputSearch}
                    placeholder= "Eu preciso de ..."
                />
                <Feather name="search" size={22} />
            </View>


            <Text style={style.title}>
                Serviços em destaque
            </Text>

            <FlatList 
                style={style.containerFlatList}
                
                data={data}
                numColumns={2}
                renderItem={({item}) => (
                    <View style={[style.containerBottonMenu, {backgroundColor: item.color}]}>
                            <View style={[style.viewMenu]}>
                                <Feather name= {item.icons} color='#fff' size={30}/>
                                <RectButton
                                        style={style.buttonInButtonMenu}
                                        onPress={item.function}
                                    >
                                    <Feather name="arrow-right" color='#fff' size={30}/>
                                </RectButton>
                                
                            </View>
                        <Text style={style.textButtonMenu}>{item.text}</Text>
                    </View>
                )}
            />

            <Picker>

            </Picker>
        </View>
    )
}

export default Dashboar