import React, { Component } from 'react';
import { SIZES,SHADOWS,TEXT,COLORS } from "../../constants/theme";
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';

const ReusableBtn=({onPressprop,button_name_prop,width,backgroundColor,borderWidth,borderColor,TextColor})=> {
    return (
        <TouchableOpacity 
        onPress={onPressprop}
        
        style={styles.btnStyle(width,backgroundColor,borderWidth,borderColor)}>
          <Text style={styles.btnText(TextColor)}> {button_name_prop} </Text>
        </TouchableOpacity>
      );
}
export default ReusableBtn
const styles=StyleSheet.create({
btnText:(TextColor)=>({
color:TextColor,

}),
btnStyle:(width,backgroundColor,borderWidth,borderColor)=>({width:width,
    backgroundColor:backgroundColor,
    borderWidth:borderWidth,
    borderColor:borderColor,
    borderRadius:SIZES.small,
    alignItems:"center",
    justifyContent:"center",
    height:45,
}),


})