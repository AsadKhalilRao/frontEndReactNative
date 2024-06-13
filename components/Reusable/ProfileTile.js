import React from 'react';
import { View,Text,TouchableOpacity } from 'react-native';
import { COLORS, SIZES } from '../../constants/theme';
import { AntDesign } from '@expo/vector-icons';
import { ReusableText, WidthSpacer } from '../../components';
import ReusableStyles from '../../components/Reusable/Reusable.style';
const ProfileTile = ({onPressprop,titleProp,icononeProp}) =>{ 
    return(
        <TouchableOpacity onPress={onPressprop} style={{backgroundColor:COLORS.white,padding:20,borderRadius:20,marginBottom:10}}>
                 <View style={ReusableStyles.rowWithSpace("space-between")}>
                 <View style={ReusableStyles.rowWithSpace("flex-start")}>
                 <AntDesign size={20} name={icononeProp}/>
                 <WidthSpacer width={10}/>
                 <ReusableText
                    props={titleProp}
                    color={COLORS.lightGrey}
                    size={SIZES.medium}
                    Align={"auto"} />
                    </View>
                    <AntDesign size={20} name={"right"}/>
                 </View>
        </TouchableOpacity>
         )
};

export default ProfileTile;
