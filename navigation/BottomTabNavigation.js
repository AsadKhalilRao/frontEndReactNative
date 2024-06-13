import { View, Text } from 'react-native';
import React from 'react';
import {Onboarding,Chat,Home,Location,Profile, SuccessBooking,AuthTopTab} from "../screens"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import TopTabNavigator from './Toptab';
const BottomTabNavigation= ()=> {

const Tabs=createBottomTabNavigator();
const tabBarStyle={
// padding: 20,
borderRadius:20,
height:80,
// For the tab to be at top pf slide
position:"absolute",

bottom:20,
// For the tab to be at the center
left:20,
right:20,
}
    return (
      
<Tabs.Navigator initialRouteName='Home'
// activeColor="#EB6A58"
// The tabBarHideOnKeyboardToggle prop,
// when set to true, is used to automatically 
// hide the tab bar when the keyboard is displayed. 
tabBarHideKeyBoard={true}
headerShown={false}
// inactiveColor="#3e2465"
// barStyle={{paddingBottom:48, }}
>
  <Tabs.Screen name='Home' component={Home}
options={
  {
    tabBarStyle:tabBarStyle,
    tabBarShowLabel:false,
    headerShown:false,
    tabBarIcon:({focused})=>
    {
      return(
      <Ionicons
         name={focused?"home":"home-outline"} 
         size={24} 
         color="black" />
         )
    }
  }
}/> 
<Tabs.Screen name="Profile" component={TopTabNavigator} options={{
    tabBarStyle:tabBarStyle,
    tabBarShowLabel:false,
    headerShown:false,
    // The focused parameter passed to the 
    // function is a boolean value that indicates
    // whether the tab associated with the icon is 
    // currently focused or not.
    tabBarIcon:({focused})=>
    {
      return(
      <Ionicons
         name={focused?"grid":"grid-outline"} 
         size={24} 
         color="black" />
         )
    }
  }}
/>
<Tabs.Screen name='Location' component={Location} options={
  {
    tabBarStyle:tabBarStyle,
    tabBarShowLabel:false,
    headerShown:false,
    tabBarIcon:({focused})=>
    {
      return(
      <Ionicons
         name={focused?"location":"location-outline"} 
         size={24} 
         color="black" />
         )
    }
  }
}
/>
<Tabs.Screen name='Chat' component={AuthTopTab} options={
  {
    tabBarStyle:tabBarStyle,
    tabBarShowLabel:false,
    headerShown:false,
    tabBarIcon:({focused})=>
    {
      return(
      <Ionicons
         name={focused?"chatbox-ellipses":"chatbox-ellipses-outline"} 
         size={24} 
         color="black" />
         )
    }
  }
}/>   

</Tabs.Navigator>

        );
  }

export default BottomTabNavigation;