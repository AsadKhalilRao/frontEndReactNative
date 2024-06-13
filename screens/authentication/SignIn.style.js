import { StyleSheet } from "react-native";
import { COLORS, SIZES, TEXT } from '../../constants/theme';
const styles = StyleSheet.create({
        container: {
            flex:1,
            backgroundColor:COLORS.lightWhite,
            padding:20
        },
        wrapper:{
            marginBottom:20
        },
        label:{
            fontSize:SIZES.medium,
            marginBottom:5,
            marginEnd:5,
            textAlign:"right"
              },



        // Each and everytime we select the input field 
        // we would be triggering changes to borderColor 
        inputWrapper: (borderColor)=>({
            borderColor:borderColor,
            backgroundColor:COLORS.lightWhite,
            borderWidth:4,
            height:50,
            borderRadius:12,
            flexDirection:"row",
            paddingHorizontal:10,
            alignItems: "center"
        }),

        errorMessage:{
            color:COLORS.red,
            fontSize:SIZES.small,
            marginBottom:5,
            marginEnd:5,


        }
});
export default styles;