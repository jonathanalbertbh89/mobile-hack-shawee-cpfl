import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/authentication/login';

const Stack = createStackNavigator()

const AppAuthRoutes: React.FC = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login}/>
        </Stack.Navigator>
    )
}

export default AppAuthRoutes