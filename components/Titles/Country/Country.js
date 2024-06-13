import React from 'react';
import { Text, Touchable, TouchableOpacity, View } from 'react-native';
import {ReusableText,NetworkImage,HeighSpacer} from "../../index"
import { SIZES,SHADOWS,TEXT,COLORS } from "../../../constants/theme";
import { useNavigation } from "@react-navigation/native";
const Country = ({country_name}) => {
    const navigation=useNavigation();
    return(
      
    <TouchableOpacity onPress={()=>{navigation.navigate("Detailes",country_name)}}>
  <View>
       <NetworkImage image_source={country_name.imageUrl}
       width={80}
       height={80}
       radius={5}/>
       <HeighSpacer height={10}/>
       <ReusableText 
        props={country_name.country} 
        Align={"center"}
        size={SIZES.large}
        color={COLORS.black}
        />
</View>
    </TouchableOpacity>
    
    )
};
export default Country;


