import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import {
  AppBarComponent,
  Counter,
  HeighSpacer,
  NetworkImage,
  RatingComponent,
  ReusableBtn,
  ReusableText,
  ReviewComponent,
  WidthSpacer,
} from '../../components';
import { COLORS, SIZES } from '../../constants/theme';
import ReusableStyles from '../../components/Reusable/Reusable.style';
import { AntDesign } from '@expo/vector-icons';
const SelectedRoom = ({ navigation }) => {
  // create instance of route
  const router = useRoute();

  console.log(router.params);
  // Storing the data Extract the data
  const { item } = router.params;
  console.log(item);
  return (
    <View>
      {/* App Bar View */}
      <View style={{ height: 100 }}>
        <AppBarComponent
          left_icon_name={'left'}
          title={item.title}
          Colors1={COLORS.white}
          onPressLeft_Icon={() => {
            navigation.goBack();
          }}
          left_position={10}
          right_position={10}
          top_position={50}
        />
      </View>

      {/**************************************** END OF APP BAR********************************/}

      {/* View for Row */}
      <View style={[{ marginHorizontal: 10 }]}>
        {/* VIEW for the Network Image */}
        <View style={{ backgroundColor: COLORS.lightWhite, borderRadius: 20 }}>
          <NetworkImage
            image_source={item.imageUrl}
            width={'100%'}
            height={200}
            radius={12}
          />
          <HeighSpacer height={10} />
          <View style={{ marginHorizontal: 10 }}>
            {/* Row */}
            <View style={ReusableStyles.rowWithSpace('space-between')}>
              <ReusableText
                props={item.title}
                color={COLORS.black}
                size={SIZES.medium}
              />

              {/* View for the Rating and the Review */}
              <View style={ReusableStyles.rowWithSpace('flex-start')}>
                <RatingComponent rating_prop={item.rating} />
                <WidthSpacer width={5} />
                <ReusableText
                  props={item.review}
                  color={COLORS.gray}
                  size={SIZES.medium}
                />
              </View>
            </View>
            <HeighSpacer height={10} />
            <ReusableText
              props={'USA NewYork'}
              color={COLORS.gray}
              size={SIZES.medium}
            />
            {/* Creating a BorderLine */}
            <View
              style={{
                borderWidth: 0.5,
                borderColor: COLORS.gray,
                marginVertical: 15,
              }}
            ></View>
            <ReusableText
              props={'Room Requirements'}
              color={COLORS.black}
              size={SIZES.medium}
            />
            <HeighSpacer height={15} />
            <View style={ReusableStyles.rowWithSpace('space-between')}>
              <ReusableText
                props={'Price Per Night'}
                color={COLORS.black}
                size={SIZES.medium}
              />
              <ReusableText
                props={`400$`}
                color={COLORS.black}
                size={SIZES.medium}
              />
            </View>
            <HeighSpacer height={15} />
            <View style={ReusableStyles.rowWithSpace('space-between')}>
              <ReusableText
                props={'Payment Method'}
                color={COLORS.black}
                size={SIZES.medium}
              />
              <View style={ReusableStyles.rowWithSpace('flex-start')}>
                <Image
                  style={{ width: 35, height: 35 }}
                  resizeMode='contain'
                  source={require('../../assets/images/Visa.png')}
                />
                <ReusableText
                  props={`Visa`}
                  color={COLORS.black}
                  size={SIZES.medium}
                />
              </View>
            </View>
            <HeighSpacer height={15} />
            <View style={ReusableStyles.rowWithSpace('space-between')}>
              <ReusableText
                props={'4 Guests'}
                color={COLORS.black}
                size={SIZES.medium}
              />
              <Counter numberOfguestpop={4} />
            </View>
            <HeighSpacer height={15} />
            {/* Adding a Button */}
            <ReusableBtn
              button_name_prop={'Book Now'}
              width={'100%'}
              backgroundColor={COLORS.green}
              borderWidth={2}
              borderColor={COLORS.green}
              TextColor={COLORS.white}
              onPressprop={() => {
                navigation.navigate('SuccessBooking', { item });
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
export default SelectedRoom;
