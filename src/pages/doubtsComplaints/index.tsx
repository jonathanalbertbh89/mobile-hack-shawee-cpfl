import React, { useState } from 'react';
import {View, Text} from 'react-native'
import { RectButton, TextInput } from 'react-native-gesture-handler';
import CheckBox from '@react-native-community/checkbox';

import {Picker} from '@react-native-picker/picker'

import {Feather} from '@expo/vector-icons'

import style from './style'

const DoubtsComplaints: React.FC = () => {

    const [doubts, setDoubts] = useState(false);
    const [complaints, setComplaints] = useState(false);

    const data = [
        {id: 0, title: 'mais serviços' }
    ]

    return(
        <View style={style.container}>

            <View style={style.containerSearch}>
                <TextInput 
                    style={style.textInputSearch}
                    placeholder= "Eu preciso de ..."
                />
                <Feather name="search" size={22} />
            </View>

            
            

            <View
                style={style.containerCheckBox}
            >
                <View style={style.containerCheckBoxAndText}>
                <CheckBox
                    disabled={false}
                    value={doubts}
                    boxType="circle"
                    onValueChange={(newValue) => setDoubts(newValue)}
                />
                <Text style={style.textCheckBox}>Duvida</Text>
                </View>

                <View style={style.containerCheckBoxAndText}>
                <CheckBox
                    disabled={false}
                    value={complaints}
                    boxType='circle'
                    onValueChange={(newValue) => setComplaints(newValue)}
                />
                <Text style={style.textCheckBox}>Reclamação</Text>
                </View>

            </View>

            <TextInput
                placeholder="Digite seu texto..."
                style={style.longText}
            />

            <View
                style={style.containerButton}
            >
                <RectButton 
                    style={style.buttonCancel}
                >
                    <Text style={style.textButton}>Cancelar</Text>
                </RectButton>
                <RectButton
                    style={style.buttonSubmit}
                >
                    <Text style={style.textButton}>Enviar</Text>
                </RectButton>
            </View>

              
            <Picker
                style={style.picker}
             
                
            />
           

        </View>
    )
}

export default DoubtsComplaints