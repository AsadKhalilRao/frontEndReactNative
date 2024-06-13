import { View,StyleSheet, Text} from "react-native"
import {Rating} from "react-native-stock-star-rating"
import ReviewStyle from "./ReviewStyle";
import ReusableStyles from "../../Reusable/Reusable.style";
import NetworkImage from "../../Reusable/NetworkImage";
import WidthSpacer from "../../Reusable/widthSpacer";
import ReusableText from "../../Reusable/ReusableText";
import {COLORS,TEXT,SIZES} from "../../../constants/theme"
import DescriptionTextComponent from "../../Reusable/DescriptionTextComponent";
const ReviewTitles=({reviewHotelDetailScreen})=>{
   const {user,rating,updatedAt,review}=reviewHotelDetailScreen;
   const {username,profile}=user;
return(
    <View style={ReviewStyle.reviewBorder}>
        <View style={[ReusableStyles.rowWithSpace("space-between")]}>
            <View style={[ReusableStyles.rowWithSpace("flex-start"),{alignItems:"center"}]} >
                <NetworkImage 
                image_source={profile}
                width={40}
                height={40}
                radius={10}/>
                <WidthSpacer width={10}/>
                <ReusableText   props={username} size={SIZES.small+2} color={COLORS.black}/>          
               
            </View>
          
            <View style={[ReusableStyles.rowWithSpace("flex-start")]}>
                <Rating maxStars={5} stars={rating} bordered={false} color={"#FD9942"} size={20} />
                <ReusableText   props={rating} size={SIZES.small+2} color={COLORS.black}/>       
            </View>
        </View>
        <View style={{width:"80%"}}>
        <DescriptionTextComponent
                description_text={review}
                lines={2}
                />
        </View>
        <View style={[ReusableStyles.rowWithSpace("flex-end")]} >
                <View>
                    <ReusableText props={updatedAt} size={SIZES.small+2} color={COLORS.black}
                    />
                </View>
        </View>
       
        
    </View>)
}
export default ReviewTitles;
