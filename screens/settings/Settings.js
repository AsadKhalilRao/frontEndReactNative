import React from 'react';
import { Text, View } from 'react-native';
import { COLORS, SIZES } from '../../constants/theme';
import { AppBarComponent, HeighSpacer, ReusableText, SettingsTiles } from '../../components';

const Settings = ({navigation}) => {return(    
<View style={{flex:1,backgroundColor:COLORS.lightWhite}}>
    {/* Giving this View a height cause we want to 
    put the AppBar inside this View */}
    <View style={{height:100}}>
        {/* Putting AppBar inside this View */}
        <AppBarComponent
        left_icon_name={"left"}
        Colors={COLORS.white}
        onPressLeft_Icon={()=>{navigation.goBack()}}
        top_position={50}
        left_position={20}
        right_position={20}
        />
    </View>
    <View style={{marginHorizontal:20}}>
{/* Adding ReusableText */}
<ReusableText
props={"Account Settings"}
color={COLORS.black}
size={SIZES.xLarge}
Align={"auto"}
/>
{/* Adding HeightSpacer  */}
<HeighSpacer height={5}/>
{/* Hooking SettingsTiles */}
<SettingsTiles titleFormParent={"Language"}
titleOneFromParent={"Language"}
onPressprop={()=>{}}/>
<HeighSpacer height={3}/>
<SettingsTiles titleFormParent={"Currency"}
titleOneFromParent={"USA"}
onPressprop={()=>{}}/>
<HeighSpacer height={20}/>

<ReusableText
props={"Support"}
color={COLORS.black}
size={SIZES.xLarge} 
Align={"auto"}
/>

<SettingsTiles titleFormParent={"Get Help"}
titleOneFromParent={""}
onPressprop={()=>{}}/>
<HeighSpacer height={3}/>
<SettingsTiles titleFormParent={"Give Feedback"}
titleOneFromParent={""}
onPressprop={()=>{}}/>
<HeighSpacer height={20}/>


{/* Adding HeightSpacer  */}





<ReusableText
props={"Legal"}
color={COLORS.black}
size={SIZES.xLarge}
Align={"auto"}
/>
<SettingsTiles titleFormParent={"Terms of Service"}
titleOneFromParent={""}
onPressprop={()=>{}}/>
<HeighSpacer height={3}/>
<SettingsTiles titleFormParent={"Privacy"}
titleOneFromParent={""}
onPressprop={()=>{}}/>
<HeighSpacer height={20}/>
{/* Adding HeightSpacer  */}
<HeighSpacer height={10}/>
    </View>
</View>)};

export default Settings;
