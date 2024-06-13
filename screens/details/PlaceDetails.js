import React from 'react';
import { Text, Touchable, TouchableOpacity,ScrollView, View,StyleSheet,FlatList } from 'react-native';
import { SIZES,COLORS, TEXT } from '../../constants/theme';
import {ReusableText,PopularList,ReusableBtn,AppBarComponent,NetworkImage,DescriptionTextComponent, HeighSpacer} from "../../components/index"
import ReusableStyles from '../../components/Reusable/Reusable.style';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';


const PlaceDetailsScreen = ()=>{
    const place = {

        "_id": "64d062a3de20d7c932f1f70a",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "Statue of Liberty",
        "description": "The Statue of Liberty is an iconic symbol of freedom and democracy, located on Liberty Island in New York Harbor. This colossal statue was a gift from France to the United States and was dedicated in 1886. Standing at 305 feet tall, the statue represents Libertas, the Roman goddess of liberty, holding a torch and a tablet inscribed with the date of the American Declaration of Independence. The Statue of Liberty has welcomed countless immigrants to the USA, serving as a symbol of hope and opportunity.",
        "contact_id": "64c5d95adc7efae2a45ec376",
        "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/c3a8b882-b176-47f0-aec5-a0a49bf42fcd-statue-of-liberty-1.webp",
        "rating": 4.8,
        "review": "1452 Reviews",
        "latitude": 40.689247,
        "longitude": -74.044502,
        "location": "Liberty Island, New York Harbor",
        "popular": [
            {
                "_id": "64c675be3cfa5e847bcd5439",
                "title": "Family-Friendly Resort",
                "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/3e6222dc-6b79-4031-914b-60c220782b72-ff.jpeg",
                "rating": 4.6,
                "review": "12854 Reviews",
                "location": "Orlando, FL"
            },
            {
                "_id": "64c675793cfa5e847bcd5436",
                "title": "Urban Chic Boutique Hotel",
                "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/5da4db00-e83f-449a-a97a-b7fa80a5bda6-aspen.jpeg",
                "rating": 4.8,
                "review": "2312 Reviews",
                "location": "San Francisco, CA"
            }
        ]
    
}
const navigation=useNavigation();
    // creating rout object
   const route=useRoute();
   const id=route.params;
   return(
    <ScrollView>
    <View style={{}}>
          <NetworkImage
          image_source={place.imageUrl}
          width={SIZES.width}
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
          title={place.title}
          onPressLeft_Icon={()=>{navigation.goBack()}}
          onPressRight_Icon={()=>{}}/>  
        </View> 
        <View style={style.description_style}>
           <ReusableText props={place.location}
            size={TEXT.xLarge}
            color={COLORS.black}
            Align={"left"}
            />
            <DescriptionTextComponent 
              description_text={place.description}/>
        <View style={{alignContent:"center"}}>
             <HeighSpacer height={10}/>
            <View style={ReusableStyles.rowWithSpace("space-between")}>
            <ReusableText 
            props={"Polpular Hotels"}
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
              <PopularList list={place.popular}/>
              <ReusableBtn width={(SIZES.width-40)} 
             backgroundColor={COLORS.green}
             borderColor={COLORS.green}
             onPressprop={()=>{navigation.navigate("HotelSearchScreen",place._id)}}
             TextColor={COLORS.white}
             button_name_prop={"Find Best Hotels"}
              borderWidth={0}/>   
              <HeighSpacer height={50}/>
        </View>
        </View>
         
 </ScrollView>
    )
};

export default PlaceDetailsScreen;
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