import React from 'react';
import { Text, View,Image } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TopInfo, TopTrip ,TopBookings} from '../screens';
import { COLORS, SIZES } from '../constants/theme';
import { NetworkImage,HeighSpacer, AppBarComponent, ReusableText } from '../components';
import TopTabstyles from "./TopTab.style"
const topTab=createMaterialTopTabNavigator();
const TopTabNavigator = () =>{ 
    return(
    <View style={{flex:1}}>
        <View style={{backgroundColor:COLORS.lightBlue}}>
            {/* View  */}
            <View>
                <NetworkImage
                image_source="https://img.freepik.com/free-photo/beautiful-japanese-forest-scene_23-2151498058.jpg?t=st=1715254703~exp=1715258303~hmac=2eca909ab19e43af4c8831ee5899c2febd43f5d82a16a8b4796f3c37abfb18fa&w=740"
                width={"100%"}
                height={300}
                radius={0}
                />
              {/* App Bar Component */}
                <AppBarComponent
                left_icon_name={"left"}
                right_icon_name={"logout"}
                Colors={COLORS.white}
                title={""}
                Colors1={COLORS.white}
                onPressLeft_Icon={()=>{}}
                onPressRight_Icon={()=>{}}
                top_position={20}
                left_position={10}
                right_position={10}
                />

                {/* View for the Profile , this View has to be on top 
                of Network Image*/}
                <View style={TopTabstyles.profileTopTab}>
                    {/* First Child is horizontally align inside
                    parent View due to alignItems:"center" given to parent View */}
                    <Image
                    source={{uri:"https://img.freepik.com/free-photo/portrait-beautiful-girl-yellow-coat-with-backpack_1142-55171.jpg?t=st=1715251122~exp=1715254722~hmac=b409cc93ea3036e422665b11347dbbc1b70a555b4877c865aab856523a81b9ba&w=360"}}
                     style={TopTabstyles.imageStyle}/>
                     {/* Second  Child is horizontally align inside
                    parent View due to alignItems:"center" given to parent View */}
                    <HeighSpacer height={15}/>
                      {/* Second  Child is horizontally align inside
                    parent View due to alignItems:"center" given to parent View */}
                    {/* View for styling the name */}
                    <View style={TopTabstyles.nameStyle}>
                      <View style={{alignItems:'center'}}>
                      {/* First Child ReusableText is horizontally
                      centered inside parent View due alignItems:'center' of parent 
                      View */}
                       <ReusableText
                        props={"Elena Cross"}
                        color={COLORS.black}
                        size={SIZES.large}
                        Align={"center"}/>
                      </View>
                    </View>
                    <HeighSpacer height={10}/>
                 
                      <View style={{alignItems:'center'}}>
                      {/* First Child ReusableText is horizontally
                      centered inside parent View due alignItems:'center' of parent 
                      View */}
                       <ReusableText
                        props={"google@gmail.com"}
                        color={COLORS.white}
                        size={SIZES.large}
                        Align={"center"}/>
                      </View>
                   
                </View>
               


            </View>
        </View>
       <topTab.Navigator>
        <topTab.Screen name="BOOKINGS" component={TopBookings}/>
        <topTab.Screen name="TRIPS" component={TopTrip}/>
        <topTab.Screen name="INFO" component={TopInfo}/>
       </topTab.Navigator>
    </View>)
    
    
    };

export default TopTabNavigator;
