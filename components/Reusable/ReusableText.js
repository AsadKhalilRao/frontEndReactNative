import { View,Text,StyleSheet } from 'react-native';
 function ReusableText({props,color,size,Align}) {    
    return (
    <Text 
    style={styles.textStyle(size,color,Align)}
    > {props} </Text>);
  }
export default ReusableText;
const styles=StyleSheet.create({
    textStyle:(size,color,Align)=>({
    fontSize:size,
    color:color,
  textAlign:Align,
    }),    
    })