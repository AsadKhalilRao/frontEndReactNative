import React from 'react';
import { Text, View, Image } from 'react-native';
import {
  HeighSpacer,
  ReusableBtn,
  ReusableText,
  ReusableTitle,
} from '../../components';
import { COLORS, SIZES, TEXT } from '../../constants/theme';

const SuccessBooking = ({ navigation }) => {
  const hotel_object = {
    _id: '64c67442776ed29f19727fd7',
    country_id: '64c62bfc65af9f8c969a8d04',
    title: 'Luxury Hotel 1',
    imageUrl:
      'https://d326fntlu7tb1e.cloudfront.net/uploads/4fdc30c2-08c5-4bca-b05c-d8b8a60b020f-luxury1.webp',
    rating: 4.7,
    review: '(1204 Reviews)',
    location: 'New York City, NY',
  };
  return (
    <View>
      <View style={{ marginTop: '20%' }}>
        <View style={{ alignItems: 'center' }}>
          <Image
            source={require('../../assets/images/checked.png')}
            width={1000}
            height={100}
            resizeMode={'contain'}
          />
        </View>
        <HeighSpacer height={40} />
        {/* For the text to be in the center we use alignItems:"center" */}
        <View style={{ alignItems: 'center' }}>
          <ReusableText
            props={'Booking Successful'}
            color={COLORS.black}
            size={TEXT.large}
            Align={'auto'}
          />
          <HeighSpacer height={40} />

          <ReusableText
            props={'You can find your booking details below'}
            color={COLORS.gray}
            size={SIZES.medium}
            Align={'auto'}
          />
          <HeighSpacer height={10} />
        </View>
        {/* View for Room details */}
        <View style={{ margin: 20 }}>
          <ReusableText
            props={'Room Details'}
            color={COLORS.dark}
            size={SIZES.medium}
            Align={'auto'}
          />
          <HeighSpacer height={10} />
          <ReusableTitle
            props={hotel_object}
            onPressprop={() => {
              navigation.navigate('HotelDetailScreen');
            }}
          />
          <HeighSpacer height={10} />
          <ReusableBtn
            onPressprop={() => {
              navigation.goBack('');
            }}
            button_name_prop={'Done'}
            width={SIZES.width - 50}
            backgroundColor={COLORS.green}
            borderWidth={2}
            borderColor={COLORS.green}
            TextColor={COLORS.white}
          />
        </View>
      </View>
    </View>
  );
};

export default SuccessBooking;
