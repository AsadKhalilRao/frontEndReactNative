import React from 'react';
import { View,Text,FlatList } from 'react-native';
import { ReusableTitle,ReusableBtn } from '../../components';
import { COLORS, SIZES } from '../../constants/theme';
import ReusableStyles from '../../components/Reusable/Reusable.style';

const TopBookings = ({navigation}) => {
    const hotels_list =  [
        {
            "_id": "64c674d23cfa5e847bcd5430",
            "country_id": "64c62bfc65af9f8c969a8d04",
            "title": "Seaside Resort",
            "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/f5cae706-9e63-4a7d-9fdd-f63f34b93f37-seaside.jpeg",
            "rating": 4.9,
            "review": "(1204 Reviews)",
            "location": "Miami Beach, FL"
        },
        {
            "_id": "64c675183cfa5e847bcd5433",
            "country_id": "64c62bfc65af9f8c969a8d04",
            "title": "Mountain Lodge",
            "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/5da4db00-e83f-449a-a97a-b7fa80a5bda6-aspen.jpeg",
            "rating": 4.5,
            "review": "(12424 Reviews)",
            "location": "Aspen, CO"
        },
        {
            "_id": "64d0b5a4d3cb4985a76ac1aa",
            "country_id": "64c62bfc65af9f8c969a8d04",
            "title": "Hotel Alpha",
            "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/28266df3-1578-4d0d-8015-c5480f64a73d-hotel-alpha.jpeg",
            "rating": 4.7,
            "review": "(1204 Reviews)",
            "location": "City Center, USA"
        },
        {
            "_id": "64c675be3cfa5e847bcd5439",
            "country_id": "64c62bfc65af9f8c969a8d04",
            "title": "Family-Friendly Resort",
            "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/3e6222dc-6b79-4031-914b-60c220782b72-ff.jpeg",
            "rating": 4.6,
            "review": "(12854 Reviews)",
            "location": "Orlando, FL"
        },
        {
            "_id": "64c67442776ed29f19727fd7",
            "country_id": "64c62bfc65af9f8c969a8d04",
            "title": "Luxury Hotel 1",
            "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/4fdc30c2-08c5-4bca-b05c-d8b8a60b020f-luxury1.webp",
            "rating": 4.7,
            "review": "(1204 Reviews)",
            "location": "New York City, NY"
        }
    ];
    return(<View style={{margin:20}} >
       <FlatList
       data={hotels_list}
       showsVerticalScrollIndicator={false}
       keyExtractor={(item)=>{item._id}}
       renderItem={({item})=>{
        return(
        <View style={{backgroundColor:COLORS.lightWhite,marginBottom:20,borderRadius:10}}>
        
        <ReusableTitle
            props={item}
            onPressprop={()=>{navigation.navigate("SuccessBooking")}}
        />
        


        {/* Creating an other View row below ReusableTitle */}
        <View style={[ReusableStyles.rowWithSpace("space-between"),{margin:10}]}>
            <ReusableBtn
            onPressprop={()=>{navigation.navigate("HotelDetailScreen")}}
            button_name_prop={"Details"}
            width={SIZES.width-250}
            backgroundColor={COLORS.white}
            borderColor={COLORS.blue}
            borderWidth={2}
            TextColor={COLORS.blue}/>
              <ReusableBtn
            onPressprop={()=>{navigation.goBack()}}
            button_name_prop={"Cancel"}
            width={SIZES.width-250}
            backgroundColor={COLORS.red}
            borderColor={COLORS.red}
            borderWidth={2}
            TextColor={COLORS.white}/>

        </View>
        </View>)
       }}/>
    </View>)
};

export default TopBookings;


