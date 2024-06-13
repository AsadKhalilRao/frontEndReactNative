import { View, Text,StyleSheet,TouchableOpacity } from 'react-native';
import HotelDetailStyles from './hotelDetails.styles';
import ReusableStyles from '../../components/Reusable/Reusable.style';
import { AppBarComponent,ReusableBtn,HotelMap,ReviewComponent,HotelReviewList,NetworkImage,DescriptionTextComponent,ReusableText,HeighSpacer,RatingComponent } from '../../components/index';
import {Rating} from "react-native-stock-star-rating"
import { useRoute } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import { COLORS,SIZES } from '../../constants/theme';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
const HotelDetailScreen=()=> {
  const navigation=useNavigation();
  const route=useRoute();
  const itemId = route.params;
  const hotel = {
    "availability": {
        "start": "2023-08-20T00:00:00.000Z",
        "end": "2023-08-25T00:00:00.000Z"
    },
    "_id": "64c675793cfa5e847bcd5436",
    "country_id": "64c62bfc65af9f8c969a8d04",
    "title": "Urban Chic Boutique Hotel",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris sit amet massa vitae tortor condimentum lacinia quis. Elit ut aliquam purus sit amet luctus. Nunc mi ipsum faucibus vitae aliquet. Et magnis dis parturient montes nascetur ridiculus mus mauris. Vel fringilla est ullamcorper eget nulla facilisi.",
    "contact": "64c5d95adc7efae2a45ec376",
    "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/5da4db00-e83f-449a-a97a-b7fa80a5bda6-aspen.jpeg",
    "rating": 4.8,
    "review": "2312 Reviews",
    "location": "San Francisco, CA",
    "latitude": 37.7749,
    "longitude": -122.4194,
    
    "price": 400,
    "facilities": [
        {
            "wifi": true,
            "_id": "64c675793cfa5e847bcd5437"
        }
    ],
    "__v": 1,
      "reviews": [
        {
          "_id": "64d38ff59af9119acfab@ece",
          "review": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, \nmolestiae quas vel sint commod",
          "rating": 4.6,
          "user": {
            "_id": "64c5d95adc7efae2a45ec376",
            "username": "John Doe",
            "profile": "data:image/jpeg;base64,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"
          },
         
          "updatedAt": "2023-08-09T13:09:09.200Z"
   },
   {
    "_id": "64d797efa5628cedef4fce58",
    "review": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, \nmolestiae quas vel sint commod",
    "rating": 4.6,
    "user": {
      "_id": "64c5d95adc7efae2a45ec376",
      "username": "John Doe",
      "profile": "data:image/jpeg;base64,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"
    },
   
    "updatedAt": "2023-08-09T13:09:09.200Z"
}
   ]
};

let coordinate={
  id:hotel._id,
  title:hotel.title,
  latitude:hotel.latitude,
  longitude:hotel.longitude,
  // Help us define the zoom of map
  latitude_delta:0.01,
  longitude_delta:0.01
}


    return (
      <ScrollView>
        {/* View of AppBarComponent */}
        <View style={{height:80}}>

{/****************** Start of App Bar Component ****************************/}
          <AppBarComponent
          left_icon_name={"left"}
          right_icon_name={"search1"}
          Colors={COLORS.white}
          title={"Hotel Detail Screen"}
          Colors1={COLORS.white}
          onPressLeft_Icon={()=>{navigation.goBack();}}
          onPressRight_Icon={()=>{}}
          left_position={10}
          right_position={10}
          top_position={35}
          />
{/****************** End of App Bar Component ****************************/}
        </View>
        {/* End of View of AppBar Component */}
   


   {/****************** Start of HotelDetailStyles Container********************/}
        <View style={HotelDetailStyles.container}>
          {/* Start of Network Image */}
          <NetworkImage image_source={hotel.imageUrl} width={"100%"} height={220} radius={25}/>
            {/* End of Network Image */}          
          <View style={HotelDetailStyles.titleContainer}>
               <View style={HotelDetailStyles.titleColumn}>
                   {/* Description Heading */}
                  <ReusableText props={hotel.title} size={SIZES.xLarge} color={COLORS.black}/>
                   {/*Space above San Francisco, CA*/}
                  <HeighSpacer height={1}/>
                   {/*San Francisco, CA Text*/}
                  <ReusableText  props={hotel.location} size={SIZES.large} color={COLORS.black}/>
                   {/*Space below San Francisco, CA*/}
                  <HeighSpacer height={1}/>
                  <View style={ReusableStyles.rowWithSpace("space-between")}>
                     <Rating maxStars={5} stars={hotel.rating} bordered={false} color={"#FD9942"}/>
                     <ReusableText props={hotel.review} size={SIZES.medium} color={COLORS.gray}/>
                  </View>
               </View>
          </View>

        </View>
        {/****************** End of HotelDetailStyles Container********************/}
        
        <View style={[HotelDetailStyles.container,{paddingTop:0}]}>
        <ReusableText
        props={"Description"}
        size={SIZES.xLarge}
        color={COLORS.black}/>
        <HeighSpacer height={1}/>   
        <DescriptionTextComponent
        description_text={hotel.description}
        />   
        <HeighSpacer height={1}/>   
        <ReusableText 
               props={"Location"}
              size={SIZES.xLarge}
              color={COLORS.black}/>
         <ReusableText 
               props={hotel.location}
              size={SIZES.small+10}
              color={COLORS.gray}/>   
         <HotelMap 
         hotelCoordinates={coordinate}
         />   
         <View style={ReusableStyles.rowWithSpace("space-between")}>
            <ReusableText 
               props={"Reviews"}
              size={SIZES.small+10}
              color={COLORS.black}/>   
          <TouchableOpacity>
          <Feather
          name='list'
          size={26}
          />
          </TouchableOpacity>
          
         </View>        
         <HeighSpacer height={10}/>
         <HotelReviewList hotel_reviews={hotel.reviews}/>
         <View style={[ReusableStyles.rowWithSpace("space-between")]}>   
         <View >
          <ReusableText 
          props={`\$ ${hotel.price}`}
          size={SIZES.large}
          color={COLORS.black}
          onPressprop={()=>{}}
          />
           <ReusableText 
          props={`Jan 01-Dec 25`}
          size={SIZES.small}
          color={COLORS.gray}
          onPressprop={()=>{}}
          />
        </View>
        
        <View>

        <ReusableBtn
        button_name_prop={"Select Room"}
        width={(SIZES.width-50)/2.2}
        backgroundColor={COLORS.green}
        borderColor={COLORS.green}
        borderWidth={0}
        TextColor={COLORS.white}
        onPressprop={()=>{navigation.navigate("RoomSelectionScreen")}}
        />
        </View>
        </View>
        <HeighSpacer height={10}/>
        
        </View>
        
        
      </ScrollView>
    );
  
}
export default HotelDetailScreen;
const styles=StyleSheet.create({

})