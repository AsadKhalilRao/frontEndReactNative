import { Text,View,FlatList,StyleSheet } from "react-native";
import {ReusableTitle} from "../../components/index"
import { useNavigation } from "@react-navigation/native";
const PopularList=({list})=>{
    const navigation=useNavigation();
return(
<FlatList data={list}
// Since in CountryDetais.js we are using ScrollableView
// component and FlatList is also a scrollable
// hence we disbale Scroll of FlatList 
scrollEnabled={false}
showsVerticalScrollIndicator={false}
keyExtractor={(item)=>{item._id}}
renderItem={({item})=>{
    return(
        <View style={{marginBottom:10}}>
           <ReusableTitle
           props={item}
           onPressprop={()=>{navigation.navigate("PlaceDetailsScreen",item._id)}}
           />
        </View>
    )
}}
/>
)
}
export default PopularList;
const styles=StyleSheet.create({

})