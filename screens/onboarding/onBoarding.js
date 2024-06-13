import { View,Text,FlatList,Image } from 'react-native';
import React from 'react';
import {Slides} from "../../components/index"
import { SafeAreaView } from 'react-native-safe-area-context';
const Onboarding=()=>{
    const slides=[
        {id:1,image:require("../../assets/images/1.png"),text:"Find the perfect place to stay"},
        {id:2,image:require("../../assets/images/2.png"),text:"Discover the world"},
        {id:3,image:require("../../assets/images/3.png"),text:"Find the best hotels in the world"}]
    return(
       <FlatList
       pagingEnabled
       horizontal={true}
       showsHorizontalScrollIndicator={false}
       data={slides}
       keyExtractor={(item)=>{item.id}}
       renderItem={(prop)=>{
    
        return(<Slides props={prop.item}/>)
    }}
       />
    )
}
export default Onboarding;
