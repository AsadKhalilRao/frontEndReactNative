import { View,StyleSheet, TouchableOpacity } from "react-native"
import ReusableStyles from "./Reusable.style";
import {COLORS,TEXT} from "../../constants/theme"
import {ReusableText} from "../../components/index"
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const AppBarComponent=({left_icon_name,right_icon_name,Colors,title,Colors1,onPressLeft_Icon,onPressRight_Icon,top_position,left_position,right_position})=>{
    const navigation=useNavigation();
    return(
    <View style={styles.overlay(top_position,left_position,right_position)}>
           {/* Row */}
        <View style={ReusableStyles.rowWithSpace("space-between")}>
           
           {/* LEFT ICON */}
            <TouchableOpacity style={styles.box1(Colors1)} onPress={onPressLeft_Icon}>
                <AntDesign
                name={left_icon_name}
                size={26}
                />
            </TouchableOpacity>

            {/* TEXT */}
            <ReusableText props={title}
            size={TEXT.large}
            color={COLORS.black} />
              {/* RIGHT ICON */}
            <TouchableOpacity style={styles.box(Colors)} onPress={onPressRight_Icon}>
                <AntDesign
                name={right_icon_name}
                size={26}
                />
            </TouchableOpacity>
          
           </View>
        </View>
    )
}
export default AppBarComponent;
const styles=StyleSheet.create({
    overlay:(top_position,left_position,right_position)=>({
        position:"absolute",
        top: top_position !== undefined ? top_position : 30,
        justifyContent:"center",
        left:left_position !== undefined ? left_position :0,
        right:right_position !== undefined ? right_position :0,
    }),
    box1:(Colors1)=>({
        backgroundColor:Colors1,
        width:30,
        height:30,
        borderRadius:9,
        alignItems:"center",
        justifyContent:"center",
    }),
    box:(Colors)=>({
        backgroundColor:Colors,
        width:30,
        height:30,
        borderRadius:9,
        alignItems:"center",
        justifyContent:"center",
    })

})