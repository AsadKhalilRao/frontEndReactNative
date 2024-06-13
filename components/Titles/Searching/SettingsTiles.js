import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ReusableStyles from '../../Reusable/Reusable.style';
import { COLORS, SIZES, TEXT } from '../../../constants/theme';
import ReusableText from '../../Reusable/ReusableText';
import WidthSpacer from '../../Reusable/widthSpacer';
import { AntDesign } from '@expo/vector-icons';

// Parent Component is Settings
const SettingsTiles = ({onPressprop,titleFormParent,titleOneFromParent}) => {
 
 return(
 <TouchableOpacity onPress={onPressprop}
 style={[ReusableStyles.rowWithSpace("space-between"),styles.constainer]}>
<ReusableText
props={titleFormParent}
color={COLORS.gray}
size={TEXT.large}
Align={"auto"}
/>
{titleFormParent==="Language" ?
(
    <View style={ReusableStyles.rowWithSpace("flex-start")}>
        <Image  source={require("../../../assets/images/USA.png")}
        style={styles.imageStyles}/>
        <WidthSpacer width={5}/>
        <ReusableText props={"English"}  color={COLORS.gray} 
        size={TEXT.large} Align={"auto"}/>
        <WidthSpacer width={5}/>
        <AntDesign name='right' size={20}
        color={COLORS.dark}/>
    </View>

):(<View style={ReusableStyles.rowWithSpace("flex-start")}>
      <ReusableText 
        props={titleOneFromParent} 
        color={COLORS.gray} 
        size={TEXT.large} 
        Align={"auto"}/>
        <WidthSpacer width={5}/>
        <AntDesign name='right' size={20}
        color={COLORS.dark}/>
</View>)}


 </TouchableOpacity>
 )
};

export default SettingsTiles;
const styles=StyleSheet.create({
    constainer:{
        borderBottomWidth:1,
        borderColor: COLORS.lightGrey,
        paddingVertical:15
    },
    imageStyles:
        {width:30,
            height:30,
        resizeMode:"contain"}
    
})