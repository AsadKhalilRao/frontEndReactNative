import { View, Text,TouchableOpacity,StyleSheet } from 'react-native';
import { SIZES,SHADOWS,TEXT,COLORS } from "../../../constants/theme";
import {HeighSpacer,ReusableText,NetworkImage,RatingComponent,ReviewComponent} from "../../index"
const HotelCardComponent=({prop_hotel_card,margin_prop,OnPressProp})=> {
    return (
<TouchableOpacity style={styles.card(margin_prop)} onPress={OnPressProp}>
    <View>
        <View style={styles.image_container}>
            <NetworkImage image_source={prop_hotel_card.imageUrl}
            width={140}
            height={110}
            radius={12}
            />
        </View>

        <HeighSpacer height={5}/>
        
        <View style={{padding:2}}>
            <ReusableText
            props={prop_hotel_card.title}
            color={COLORS.black}
            size={TEXT.small}
            Align={"center"}
            />
        </View>
      
        <HeighSpacer height={1}/>
           <ReusableText
            props={prop_hotel_card.location}
            color={COLORS.gray}
            size={TEXT.small}
            Align={"center"}/>
         <View style={{flexDirection:"row",paddingVertical:10}}>
        <HeighSpacer height={5}/>
      
             <RatingComponent 
             rating_prop={prop_hotel_card.rating}
             />
       
        <HeighSpacer height={5}/>
             <ReviewComponent 
             review_prop={prop_hotel_card.review}/>
        </View>
    </View>
</TouchableOpacity>
    );
  
}
export default HotelCardComponent;
const styles=StyleSheet.create({
    card:(margin_prop)=>({
        marginRight:margin_prop,
        width:(SIZES.width)/2.2,
        // height:250,
        borderRadius:16,
        backgroundColor:COLORS.lightWhite,

    }),
    image_container:{
    alignItems:"center",
    marginTop:10,
    // height:150,
    }
})