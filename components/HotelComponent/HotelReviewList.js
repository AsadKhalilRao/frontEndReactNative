import { View, Text,FlatList } from 'react-native';
import {PopularList,ReviewTitles} from '../index';
 const HotelReviewList=({hotel_reviews})=>{

    return (
      <FlatList
      scrollEnabled={false}
      data={hotel_reviews}
      keyExtractor={(item)=>{return(item._id)}}
      renderItem={({item})=>{
        return(
        <View style={{marginBottom:10}}>
        <ReviewTitles 
        reviewHotelDetailScreen={item}/>
       </View>
      )}}
      />
    );
  
}
export default HotelReviewList;
