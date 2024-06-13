import React from 'react';
import {COLORS,SIZES,TEXT} from "../../constants/theme"
import {NetworkImage,WidthSpacer,ReusableText,HeighSpacer,RatingComponent,ReviewComponent} from "../index"
import { Text, Touchable, TouchableOpacity, View,StyleSheet } from 'react-native';
import  ReusableStyles from "./Reusable.style";
const ReusableTitle = ({props,onPressprop}) => {
return(
<TouchableOpacity style={styles.container} onPress={onPressprop}>
   <View style={ReusableStyles.rowWithSpace("flex-start")}>
        <NetworkImage 
        image_source={props.imageUrl}
        width={80}
        height={80}
        radius={12}/>
        <WidthSpacer width={20}/>
     <View>
        <ReusableText 
          props={props.title}
          size={SIZES.medium}
          color={COLORS.black}/>
        <HeighSpacer height={5}/>
        <View style={ReusableStyles.rowWithSpace("flex-start")}>
        <RatingComponent rating_prop={props.rating}/>
       
        <ReviewComponent review_prop={props.review}/>
        <HeighSpacer height={5}/>  
       </View>
     </View>   
    </View>
</TouchableOpacity>
    )
};
export default ReusableTitle;
const styles = StyleSheet.create({
    container: {padding: 10,
    backgroundColor:COLORS.lightWhite,
    borderRadius:12,}
})