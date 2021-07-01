import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import colors from '../styles/colors';



import Introduction from '../pages/Introduction';
import LetsGo from '../pages/LetsGo';
import NewUserName from '../pages/NewUserName';
import Sandwichs from '../pages/Sandwichs';


const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator
        headerMode="none"
        screenOptions={{
            cardStyle: {
                backgroundColor: colors.black
            }
        }}
    >
        <stackRoutes.Screen
            name="Introduction"
            component={Introduction}
        />

        <stackRoutes.Screen
            name="LetsGo"
            component={LetsGo}
        />

        <stackRoutes.Screen
            name="NewUserName"
            component={NewUserName}
        />
        
        <stackRoutes.Screen
            name="Sandwichs"
            component={Sandwichs}
        />

    </stackRoutes.Navigator>
)

export default AppRoutes;
