import React, { useState } from 'react';
import { Text, View} from 'react-native';
import { RectButton, TextInput } from 'react-native-gesture-handler';
import PieChart from '../../components/grafic/index'

import style from './style'

interface ResultaLeitura {
    kmh: number,
    total: number,
    porcentBudget: number,
}


const Spending: React.FC = () => {
    const [leitura, setLeitura] = useState<string>()

    const [resultadoLeitura, setResultadoLeitura] = useState<ResultaLeitura>()

    

    return(
        <View style={style.container}>
            <View style={style.containerReading}>
                <Text style={style.textReading}>Digite seu consumo atual</Text>                           
                <TextInput
                    style={style.textInputReading}
                    value={leitura}
                    placeholder= "Somente números"
                    onChangeText={setLeitura}
                />        

                
                {

                    resultadoLeitura == null ? (
                        <View>
                            <Text>Leitura Anterior= {/*resultadoLeitura?.kmh*/}</Text>
                            <Text>Total consumido = {/*resultadoLeitura?.total*/}</Text>
                            <Text>Porcentagem = {/*resultadoLeitura?.total*/}%</Text>
                        </View>
                    ): null
                }      

                <RectButton style={style.buttonReading}>
                    <Text style={style.textButtonReading}>Enviar</Text>
                </RectButton>


                                     
            </View>

            <View style={{justifyContent: 'center', backgroundColor: 'red'}}>
                    <PieChart/>

            </View>
          
        </View>
    )   


}

export default Spending