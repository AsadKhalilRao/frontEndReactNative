import { View,Text,StyleSheet  } from "react-native"
import { SIZES, TEXT } from "../../constants/theme";

const DescriptionTextComponent=({description_text,lines})=>{
    return(<View>
        {/* numberOfLines property help us to provide 
        how many line we want by assingning it the 
        lines */}
        <Text numberOfLines={lines}
        style={styles.description_text_style}
        >{description_text}</Text>
    </View>)
}
export default DescriptionTextComponent;
const styles = StyleSheet.create({
    description_text_style: {
      paddingVertical: 2,
      fontSize: TEXT.medium,
      textAlign: "left",
    },
  });