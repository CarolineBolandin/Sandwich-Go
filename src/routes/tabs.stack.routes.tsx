import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons'
import colors from '../styles/colors';
import Home from '../pages/Sandwichs';


const Tabs = createBottomTabNavigator();

function tabRoutes(){
    return (
        <Tabs.Navigator 
        initialRouteName= "Home"
        tabBarOptions={{
            activeTintColor: colors.deepSkyBlue,
            inactiveTintColor: "gray",
            showLabel: false,
            tabStyle:{
                alignItems: 'center',
            }
        }}

        >
            
            <Tabs.Screen name="Home" component={Home} 
            options={{
                tabBarIcon:({color, size}) => (<Ionicons nome="home" color={color} size={size}/>
                )
            }}
            />
            
            
             </Tabs.Navigator>
    )
}

export default tabRoutes;