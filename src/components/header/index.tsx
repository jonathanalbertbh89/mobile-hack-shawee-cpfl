import React from 'react';
import { View, Image } from 'react-native';

import {Feather} from '@expo/vector-icons'

import Logo from '../../assets/logobranca.png'

import style from './styles'

const Header : React.FC = () => {
    return(
        <View style={style.container}>
            <Feather name="menu" size={24} color="#fff"/>

            <Image source={Logo} style={style.logo} />

            <Feather name="bell" size={24} color="#fff"/>
        </View>
    )
}

export default Header