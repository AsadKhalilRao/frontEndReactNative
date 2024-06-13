import React from 'react';
import { StyleSheet } from 'react-native';
import { SIZES,SHADOWS,TEXT,COLORS } from "../../constants/theme";
import { View, Text,Image } from 'react-native';

 const NetworkImage=({image_source,width,height,radius})=>{

    return (
      <View>
        <Image
        source={{uri:image_source}}
        style={styles.image(width,height,radius)}
        />
      </View>
    );
  }

export default NetworkImage;
const styles=StyleSheet.create({
    image:(width,height,radius)=>({
        width:width,
        height:height,
        borderRadius:radius,
        resizeMode:"cover",
        
    })
})