import React,{useState,useEffect} from 'react';
import {  Text,View, TextInput,TouchableOpacity,Image,FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ReusableStyles from '../../components/Reusable/Reusable.style';
import styles from './search.style';
import { Feather } from '@expo/vector-icons';
import {HeighSpacer, ReusableTitle} from "../../components/index"
import { SIZES,COLORS } from "../../constants/theme";
import { useNavigation } from '@react-navigation/native';
const Search = () => {
    const navigation=useNavigation();
    // setSearchKey is a function
    // searchKey is a variable that hold the current value
    const [searchKey,setSearchKey] =useState("");
    const [searchResults,setSearchResults] = useState([])
 const search =  [
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
    return(
    <SafeAreaView style={ReusableStyles.container}>
    {/* Following View is the Row */}
       <View style={styles.searchContainer}>
        {/* View for the Search Input */}
        {/*****************************First Child,First Column****************/}
        <View style={styles.searchWrapper}>
            <TextInput
            style={styles.textInputStyle}
            value={searchKey}
            // We need to set state on change text
            // We need to change the state of our key for that we use setSearchKey
            // By writing setSearchKey we are calling setSearchKey
            onChangeText={setSearchKey}
            placeholder='Where do you want to visit.'
            />
        </View>
           {/*****************************Second Child,Second Column***************************/}
        <TouchableOpacity style={styles.searchBtn}>
         {/* Adding Icon inside TouchableOpacity */}
        {/* First Child of Second Column */}
         <Feather
        //  Name of Icon must be mentioned 
        name='search'
        size={24}
        color={COLORS.white}
         />
        </TouchableOpacity>
      
      
       </View>
   {search.length===0 ? (
   <View>
      <HeighSpacer height={"20%"}/>
      <Image source={require("../../assets/images/search.png")} style={styles.searchImage}/>
    </View>
    ):
    (<View >
    <FlatList data={search}
            keyExtractor={(item)=>{return(item._id)}}
            renderItem={({item})=>{return(
              <View style={styles.tile}>
                <ReusableTitle
                props={item}
                onPressprop={()=>{navigation.navigate("PlaceDetailsScreen",item._id)}}
                />
                </View>
                )}}
            />
   
   </View>
)}
    
   
    </SafeAreaView>
    )}

export default Search;
