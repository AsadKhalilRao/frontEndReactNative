import React from 'react';
import { View,Text,TouchableOpacity } from 'react-native';
import { COLORS, SIZES } from '../../constants/theme';
import { AntDesign } from '@expo/vector-icons';
import { ProfileTile, ReusableText } from '../../components';
import ReusableStyles from '../../components/Reusable/Reusable.style';

const TopInfo = ({navigation}) => {
    return(   <View style={{margin:20}}>
        <ProfileTile
        onPressprop={()=>{}}
        titleProp={"Personal Information"}
        icononeProp={"user"}/>
        
         <ProfileTile
        onPressprop={()=>{navigation.navigate("Payments")}}
        titleProp={"Payments"}
        icononeProp={"creditcard"}/>
        <ProfileTile
        onPressprop={()=>{navigation.navigate("Settings")}}
        titleProp={"Settings"}
        icononeProp={"setting"}
       />
    </View>)
};

export default TopInfo;


