import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ReusableStyles from '../../components/Reusable/Reusable.style';
import styles from './search.style';
import { Feather } from '@expo/vector-icons';
import { HeighSpacer, HotelCardComponent,AppBarComponent } from '../../components/index';
import { SIZES, COLORS } from '../../constants/theme';
import { useNavigation } from '@react-navigation/native';

const HotelSearchScreen = () => {
  const navigation = useNavigation();
  // setSearchKey is a function
  // searchKey is a variable that hold the current value
  const [searchKey, setSearchKey] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const hotels_list = [
    {
      _id: '64c674d23cfa5e847bcd5430',
      country_id: '64c62bfc65af9f8c969a8d04',
      title: 'Seaside Resort',
      imageUrl:
        'https://d326fntlu7tb1e.cloudfront.net/uploads/f5cae706-9e63-4a7d-9fdd-f63f34b93f37-seaside.jpeg',
      rating: 4.9,
      review: '(1204 Reviews)',
      location: 'Miami Beach, FL',
    },
    {
      _id: '64c675183cfa5e847bcd5433',
      country_id: '64c62bfc65af9f8c969a8d04',
      title: 'Mountain Lodge',
      imageUrl:
        'https://d326fntlu7tb1e.cloudfront.net/uploads/5da4db00-e83f-449a-a97a-b7fa80a5bda6-aspen.jpeg',
      rating: 4.5,
      review: '(12424 Reviews)',
      location: 'Aspen, CO',
    },
    {
      _id: '64d0b5a4d3cb4985a76ac1aa',
      country_id: '64c62bfc65af9f8c969a8d04',
      title: 'Hotel Alpha',
      imageUrl:
        'https://d326fntlu7tb1e.cloudfront.net/uploads/28266df3-1578-4d0d-8015-c5480f64a73d-hotel-alpha.jpeg',
      rating: 4.7,
      review: '(1204 Reviews)',
      location: 'City Center, USA',
    },
    {
      _id: '64c675be3cfa5e847bcd5439',
      country_id: '64c62bfc65af9f8c969a8d04',
      title: 'Family-Friendly Resort',
      imageUrl:
        'https://d326fntlu7tb1e.cloudfront.net/uploads/3e6222dc-6b79-4031-914b-60c220782b72-ff.jpeg',
      rating: 4.6,
      review: '(12854 Reviews)',
      location: 'Orlando, FL',
    },
    {
      _id: '64c67442776ed29f19727fd7',
      country_id: '64c62bfc65af9f8c969a8d04',
      title: 'Luxury Hotel 1',
      imageUrl:
        'https://d326fntlu7tb1e.cloudfront.net/uploads/4fdc30c2-08c5-4bca-b05c-d8b8a60b020f-luxury1.webp',
      rating: 4.7,
      review: '(1204 Reviews)',
      location: 'New York City, NY',
    },
  ];
  return (
    <SafeAreaView>
    {/* View for the AppBar */}
    <View style={{height:50}}>
    <AppBarComponent
          left_position={10}
          right_position={10}
          top_position={20}
          left_icon_name={"left"}
          right_icon_name={"filter"}
          Colors1={COLORS.white}
          Colors={COLORS.white}
          title={"Look for Hotels"}
          onPressLeft_Icon={()=>{navigation.goBack()}}
          onPressRight_Icon={()=>{}}/>
    </View>
    
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
      {hotels_list.length === 0 ? (
        <View>
          <HeighSpacer height={'20%'} />
          <Image
            source={require('../../assets/images/search.png')}
            style={styles.searchImage}
          />
        </View>
      ) : (
        <View style={{ paddingLeft: 12 }}>
          <FlatList
            data={hotels_list}
            numColumns={2}
            ItemSeparatorComponent={() => <View style={{ height: 36 }} />}
            keyExtractor={(item) => {
              return item._id;
            }}
            renderItem={({ item }) => {
              return (
                <HotelCardComponent
                  prop_hotel_card={item}
                  margin_prop={10}
                  OnPressProp={()=>{navigation.navigate("PlaceDetailsScreen",item._id)}}
                />
              );
            }}
          />
        </View>
      )}
    </SafeAreaView>
  );
};
export default HotelSearchScreen;
