import { StyleSheet } from "react-native";
import { COLORS } from "../constants/theme";
const TopTabstyles = StyleSheet.create({
   
    profileTopTab:{
        position: 'absolute',
        left:0,
        right: 0,
        top:50,
       alignItems:"center",
   
    },
    imageStyle:{
        resizeMode:"cover",
        width:100,
        height:100,
        // Giving border color to the image
        borderColor:COLORS.lightWhite,
        // We need to define the borderWidth to se borderColor as by
        //  default our borderWidth is 0
        borderWidth:2,
        borderRadius:90,
    },
    nameStyle:{
       backgroundColor:COLORS.lightGrey,
   
        padding:5,
        borderRadius:12,
    }
});
export default TopTabstyles;