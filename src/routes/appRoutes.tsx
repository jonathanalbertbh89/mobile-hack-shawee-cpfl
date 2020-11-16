import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Spending from '../pages/ spending';
import Header from '../components/header/index';
import Dashboar from '../pages/dashboard';
import DoubtsComplaints from '../pages/doubtsComplaints'
import LackOfEnergyPage1 from '../pages/lackOfEnergy/page1';
import LackOfEnergyPage2 from '../pages/lackOfEnergy/page2';
import LackOfEnergyPage3 from '../pages/lackOfEnergy/page3';



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

            <Stack.Screen 
                name="DoubtsComplaints" 
                component={DoubtsComplaints} 
                options={{
                    header: () => <Header/>
                }}
                />    

            <Stack.Screen name="LackOfEnergyPage1" component={LackOfEnergyPage1}
                options={{
                    header: () => <Header/>
                }}
            />    
            <Stack.Screen name="LackOfEnergyPage2" component={LackOfEnergyPage2}
                options={{
                    header: () => <Header/>
                }}
            />    
            <Stack.Screen name="LackOfEnergyPage3" component={LackOfEnergyPage3}
                options={{
                    header: () => <Header/>
                }}
            />    
        </Stack.Navigator>
    )
}

export default AppRoutes