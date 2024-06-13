import React from 'react';
import { Text, View,ScrollView, Image } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Registration, SigningIn } from '../screens';
import { COLORS } from '../constants/theme';
import { HeighSpacer, NetworkImage } from '../components';
const AuthTabs=createMaterialTopTabNavigator();
const AuthTopTab = () => {
return(   
    <View style={{flex:1,backgroundColor:COLORS.red}}> 
  <ScrollView style={{flex:1,backgroundColor:COLORS.red}}>
<HeighSpacer height={0}/>

{/* Giving Height Spacer */}


<View>

{/* style={{height:300,width:"100%",resizeMode:"cover"}}
Sets the height to 300 units, the width to 100% of its container (the View component),
and uses "cover" as the resizeMode, which means the image will cover the entire 
container View component. */}
<Image
        source={require("../assets/images/bg1.png")}
        style={{height:300,width:"100%",resizeMode:"cover"}}
        />
</View>

<View style={{height:600}}>
 <AuthTabs.Navigator>
    <AuthTabs.Screen name='SignIn' component={SigningIn}/>
    <AuthTabs.Screen name='Registration' component={Registration}/>
 </AuthTabs.Navigator>
</View>

 
    </ScrollView> 
    </View>) 
};

export default AuthTopTab;
