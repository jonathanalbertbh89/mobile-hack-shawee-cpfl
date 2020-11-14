import React from 'react';
import { Picker, ScrollView, View, Text, TextInput} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import {Feather} from '@expo/vector-icons'


import style from './style'

const Dashboar: React.FC = () => {
    return(
        <View style={style.container}>
            <TextInput 
                placeholder="Eu gostaria de ..."
                style={style.textInput}
             >
                 <Feather name="search" size={24}/>
             </TextInput>

            <Text style={style.title}>
                Serviços em destaque
            </Text>

            <ScrollView 
                alwaysBounceHorizontal={true}
                style={style.containerScrollView}
                >
                
                
                <View style={style.containerBottonMenu}>
                    <View style={style.viewMenu}>
                        <Feather name="dollar-sign" color='#fff' size={20}/>
                        <Feather name="arrow-right" color='#fff' size={20}/>
                    </View>
                    <Text style={style.textButtonMenu}>Revisão de gastos e Orçamento</Text>
                </View>

                <View style={style.containerBottonMenu}>
                    <View style={style.viewMenu}>
                        <Feather name="dollar-sign" color='#fff' size={20}/>
                        <Feather name="arrow-right" color='#fff' size={20}/>
                    </View>
                    <Text style={style.textButtonMenu}>Revisão de gastos e Orçamento</Text>
                </View>

                <View style={style.containerBottonMenu}>
                    <View style={style.viewMenu}>
                        <Feather name="dollar-sign" color='#fff' size={20}/>
                        <Feather name="arrow-right" color='#fff' size={20}/>
                    </View>
                    <Text style={style.textButtonMenu}>Revisão de gastos e Orçamento</Text>
                </View>

                <View style={style.containerBottonMenu}>
                    <View style={style.viewMenu}>
                        <Feather name="dollar-sign" color='#fff' size={20}/>
                        <Feather name="arrow-right" color='#fff' size={20}/>
                    </View>
                    <Text style={style.textButtonMenu}>Revisão de gastos e Orçamento</Text>
                </View>

                <View style={style.containerBottonMenu}>
                    <View style={style.viewMenu}>
                        <Feather name="dollar-sign" color='#fff' size={20}/>
                        <Feather name="arrow-right" color='#fff' size={20}/>
                    </View>
                    <Text style={style.textButtonMenu}>Revisão de gastos e Orçamento</Text>
                </View>

                <View style={style.containerBottonMenu}>
                    <View style={style.viewMenu}>
                        <Feather name="dollar-sign" color='#fff' size={20}/>
                        <Feather name="arrow-right" color='#fff' size={20}/>
                    </View>
                    <Text style={style.textButtonMenu}>Revisão de gastos e Orçamento</Text>
                </View>
            </ScrollView>

            <Picker>

            </Picker>
        </View>
    )
}

export default Dashboar