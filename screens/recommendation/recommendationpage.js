import React from 'react';
import { SIZES,SHADOWS,TEXT,COLORS } from "../../constants/theme";
import {AppBarComponent,ReusableText,ReusableTitle} from "../../components/index"
import { Text,TouchableOpacity,FlatList, View,StyleSheet,SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const RecommendationsPage = () => {
    const list_of_recommendations =  [
        {
            "_id": "64c631650298a05640539adc",
            "country_id": "64c62bfc65af9f8c969a8d04",
            "title": "Walt Disney World",
            "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/731e1f89-c028-43ef-97ee-8beabde696b6-vinci_01_disney.jpg",
            "rating": 4.7,
            "review": "(1204 Reviews)"
        },
        {
            "_id": "64d062a3de20d7c932f1f70a",
            "country_id": "64c62bfc65af9f8c969a8d04",
            "title": "Statue of Liberty",
            "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/c3a8b882-b176-47f0-aec5-a0a49bf42fcd-statue-of-liberty-1.webp",
            "rating": 4.8,
            "review": "(1452 Reviews)"
        },
        {
            "_id": "64d09e3f364e1c37c8b4b13c",
            "country_id": "64c62bfc65af9f8c969a8d04",
            "title": "Golden Gate Bridge",
            "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/7b7b76aa-bbe0-4ca4-b52f-e2b82afa3a77-Golden-Gate-Bridge-San-Francisco.webp",
            "rating": 4.6,
            "review": "(2145 Reviews)"
        },
        {
            "_id": "64d09f90364e1c37c8b4b140",
            "country_id": "64c62bfc65af9f8c969a8d04",
            "title": "Yellowstone National Park",
            "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/f3f44363-f250-4002-88a8-19fe79169cc7-geyser-yelowstone-burst_h.webp",
            "rating": 4.8,
            "review": "(24455 Reviews)"
        },
        {
            "_id": "64d30f789d008909fa8b7ce5",
            "country_id": "64d2fd32618522e2fb342eec",
            "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/f3f44363-f250-4002-88a8-19fe79169cc7-geyser-yelowstone-burst_h.webp",
            "title": "Yellowstone National Park",
            "rating": 4.8,
            "review": "(24455 Reviews)"
        }
    ];

const navigation=useNavigation();

   return(
    <SafeAreaView style={{marginHorizontal:10}}>
        <View style={{height:80}}>
        <AppBarComponent 
        left_position={10}
        right_position={10}
        top_position={35}
        title={"RECOMMENDATIONS"}
        Colors={COLORS.white}
        Colors1={COLORS.lightWhite}
        left_icon_name={"left"}
        right_icon_name={"search1"}
        onPressLeft_Icon={()=>{navigation.goBack()}}
        onPressRight_Icon={()=>{navigation.navigate("Search")}}
        />
        </View>

        <View style={{}}>
            <FlatList
            data={list_of_recommendations}
            keyExtractor={(item)=>{return(item._id)}}
            renderItem={({item})=>{return(
              <View style={{marginBottom:10}}>
                <ReusableTitle
                props={item}
                onPressprop={()=>{navigation.navigate("PlaceDetailsScreen",item._id)}}
                />
                </View>
                )}}
            />
        </View>
       

    </SafeAreaView>
    )
};
export default RecommendationsPage;
