import React from 'react';
import { Text, Touchable, TouchableOpacity,ScrollView, View,StyleSheet,FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { SIZES,COLORS, TEXT } from '../../constants/theme';
import {ReusableText,PopularList,ReusableBtn,AppBarComponent,NetworkImage,DescriptionTextComponent, HeighSpacer} from "../../components/index"
import ReusableStyles from '../../components/Reusable/Reusable.style';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
const CountryDetailes = () => {
    const navigation=useNavigation();
    const route=useRoute();
   //  const { description,country,imageUrl } = route.params;
    const object_of_country = {
      "_id": "64c62bfc65af9f8c969a8d04",
      "country": "USA",
      "description": "The USA is a tourist magnet, known for its diverse landscapes, rich history, and vibrant culture. From the sun-kissed beaches of California to the bustling streets of New York City, there's something for every traveler.The USA is a tourist magnet, known for its diverse landscapes, rich history, and vibrant culture. From the sun-kissed beaches of California to the bustling streets of New York City, there's something for every traveler.The USA is a tourist magnet, known for its diverse landscapes, rich history, and vibrant culture. From the sun-kissed beaches of California to the bustling streets of New York City, there's something for every traveler.The USA is a tourist magnet, known for its diverse landscapes, rich history, and vibrant culture. From the sun-kissed beaches of California to the bustling streets of New York City, there's something for every traveler.",
      "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/1bcdbbd0-d702-475d-92ea-d9171c041674-vinci_01_places_new_york.jpg",
      "popular": [
          {
              "_id": "64c631650298a05640539adc",
              "title": "Walt Disney World",
              "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/731e1f89-c028-43ef-97ee-8beabde696b6-vinci_01_disney.jpg",
              "rating": 4.7,
              "review": "1204 Reviews",
              "location": "Orlando, USA"
          },
          {
              "_id": "64d062a3de20d7c932f1f70a",
              "title": "Statue of Liberty",
              "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/c3a8b882-b176-47f0-aec5-a0a49bf42fcd-statue-of-liberty-1.webp",
              "rating": 4.8,
              "review": "1452 Reviews",
              "location": "Liberty Island, New York Harbor"
          }
      ],
      "region": "North America, USA"
  }
    return(
      //  <SafeAreaView style={style.container}>
      <ScrollView>
         <View style={{}}>
               <NetworkImage
               image_source={object_of_country.imageUrl}
               width={"100"}
               height={SIZES.height/2.2}
               radius={30}/>  
               <AppBarComponent
               left_position={10}
               right_position={10}
               top_position={35}
               left_icon_name={"left"}
               right_icon_name={"search1"}
               Colors1={COLORS.white}
               Colors={COLORS.white}
               title={object_of_country.country}
               onPressLeft_Icon={()=>{navigation.goBack()}}
               onPressRight_Icon={()=>{}}/>  
             </View> 
             <View style={style.description_style}>
                <ReusableText props={object_of_country.region}
                 size={TEXT.xLarge}
                 color={COLORS.gray}
                 
                 />
                 <DescriptionTextComponent 
                   description_text={object_of_country.description}/>
             <View style={{alignContent:"center"}}>
                  <HeighSpacer height={10}/>
                 <View style={ReusableStyles.rowWithSpace("space-between")}>
                 <ReusableText 
                 props={"Polpular Destinations"}
                 size={TEXT.large}
                 color={COLORS.black}/>
                 <TouchableOpacity onPress={()=>{}}> 
                  <Feather
                  name='list'
                  size={23}
                  />
                 </TouchableOpacity>
                 </View>
                 <HeighSpacer height={10}/>
                   <PopularList list={object_of_country.popular}/>
                   <ReusableBtn width={(SIZES.width-40)} 
                  backgroundColor={COLORS.green}
                  borderColor={COLORS.green}
                  onPressprop={()=>{navigation.navigate("HotelSearchScreen",object_of_country._id)}}
                  TextColor={COLORS.white}
                  button_name_prop={"Find Best Hotels"}
                   borderWidth={0}/>   
                   <HeighSpacer height={50}/>
             </View>
             </View>
              
      </ScrollView>
      //  </SafeAreaView>
    )
};
export default CountryDetailes;
const style=StyleSheet.create({
   container: {
      marginHorizontal:10,
      backgroundColor:"#F3F4F8"
   },
   description_style:{
      marginHorizontal:20,
      paddingTop:20,
   }
})

