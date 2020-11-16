import React, { useState } from 'react';
import { Text, TextInput, View, ScrollView } from 'react-native';

import {Feather} from '@expo/vector-icons'

import style from './style'
import { RectButton } from 'react-native-gesture-handler';




interface Picker{
    title: string
}

const LackOfEnergyPage1: React.FC = () => {
    const [picker, setPicker] = useState<Picker>()

    const [status, setStatus] = useState(true)

    return(
        <View style={style.container}>
            {
                !status == true ? (
                    <View style={style.container}>
                        <View style={style.containerStatus}>
                            <View style={style.containerStatus1}>
                                <Text style={style.textStatus}>Status de Rede</Text>
                                <Text>Em Manutenção</Text>
                            </View>
                            <View style={style.div}/>
                            <View style={style.containerStatus2}>
                                <Text style={style.textStatus}>Precisão</Text>
                                <Text>00:12:00</Text>
                            </View>
                        </View>

                        <View style={style.containerInf}>
                            <Text style={style.textInf}>Está Ocorrência</Text>
                            <Text style={style.textInf}>Média CPFL</Text>
                        </View>

                        <View style={style.containerInfHors}>
                            <Text style={style.textInfHors}>00:09:00</Text>
                            <Text style={style.textdiv}>/</Text>
                            <Text style={style.textInfHors}>00:16:00</Text>
                        </View>
                    </View>
                ): (
                    <View style={style.containerFalse}>
                        <View style={style.containerStatusFalse}>
                            <View style={style.containerStatus1false}>
                                <Text style={style.textStatusFalse}>Status de Rede: </Text>
                                
                            </View>
                            
                            <View style={style.containerStatus2false}>
                                <RectButton style={style.buttonStatusFalse}>
                                    <Text style={style.textButtonFalse}>Avisar Falta de Energia</Text>
                                </RectButton>
                            </View>
                        </View>


                        <View style={style.containerInf}>
                            <Text style={style.textInf}>Está Ocorrência</Text>
                            <Text style={style.textInf}>Média CPFL</Text>
                        </View>

                        <View style={style.containerInfHorFalse}>
                            <Text style={style.textInfHorsFalse}>--:--:--</Text>
                            <Text style={style.textdiv}>/</Text>
                            <Text style={style.textInfHorsFalse}>--:--:--</Text>
                        </View>
                    </View>
                )
            }

            


            <View style={style.containerTextInput}>
                <TextInput 
                    style={style.textInput}
                    placeholder="Conte-nos oque aconteceu...">
                    
                </TextInput>
                <Feather 
                    style={style.icon}
                    name="camera" size={24} color="#000"/>
            </View>
           

          
            <View style={style.containerButton}>
                <RectButton style={style.buttonCancel}>
                    <Text style={style.textButton}>Voltar</Text>
                </RectButton>

                <RectButton style={style.buttonSubmit}>
                    <Text style={style.textButton}>Enviar</Text>
                </RectButton>
            </View>

           
        </View>
    )
}
export default LackOfEnergyPage1