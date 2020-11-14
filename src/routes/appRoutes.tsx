import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Spending from '../pages/ spending';
import Header from '../components/header/index';
import Dashboar from '../pages/dashboard';


const Stack = createStackNavigator()

const AppRoutes: React.FC = () => {
    return(
        <Stack.Navigator initialRouteName="Dashboar" >
            <Stack.Screen 
                name="Dashboar" 
                component={Dashboar}
                 
                options={{
                    
                    header: () => <Header/>
                }}

                />

            <Stack.Screen 
                name="Spending" 
                component={Spending}
                 
                options={{
                    
                    header: () => <Header/>
                }}

                />
        </Stack.Navigator>
    )
}

export default AppRoutes