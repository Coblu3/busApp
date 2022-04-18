import { View, Text } from 'react-native'
import React from 'react'
import mapScreen from '../MapScreen'
import SignInScreen from '../SignInScreen'
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AdminScreen from '../AdminScreen/AdminScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SelectStationScreen from '../SelectStationScreen/SelectStationScreen';

const Tab = createBottomTabNavigator();




const HomeScreen = () => {
  const route = useRoute();
  
    if (route.params.admin){
      return (
      <Tab.Navigator screenOptions= {({ route }) => ({
        headerShown:false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Maps') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'AdminPanel') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
        <Tab.Screen name="Maps" component={mapScreen}  />
        <Tab.Screen name="AdminPanel" component={AdminScreen} />
      </Tab.Navigator>
      )
    }else{
      return (
        <Tab.Navigator screenOptions= {({ route }) => ({
          headerShown:false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
  
            if (route.name === 'Maps') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Select Station') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }
  
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
          <Tab.Screen name="Maps" component={mapScreen}  />
          <Tab.Screen name="Select Station" component={SelectStationScreen} />
        </Tab.Navigator>
        )

    }
      
  
}

export default HomeScreen