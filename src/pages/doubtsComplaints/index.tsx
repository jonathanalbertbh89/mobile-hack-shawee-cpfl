import React, { useState } from 'react';
import {View, Text} from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import CheckBox from '@react-native-community/checkbox';

const DoubtsComplaints: React.FC = () => {

    const [doubts, setDoubts] = useState(false);
    const [complaints, setComplaints] = useState(false);

    return(
        <View>

            <TextInput
                placeholder= "Eu preciso de ..."
            />

            <View>
                <CheckBox
                    disabled={false}
                    value={doubts}
                    boxType='circle'
                    onValueChange={(newValue) => setDoubts(newValue)}
                />
                
            </View>
              

           

        </View>
    )
}

export default DoubtsComplaints