import React from 'react';
import { Text, View } from 'react-native';
import ReusableStyles from '../../components/Reusable/Reusable.style';
import { AppBarComponent, ReusableText } from '../../components';
import { COLORS, SIZES } from '../../constants/theme';

const Payments = ({ navigation }) => {
  return (
    <View>
      <View style={{ height: 100 }}>
        <AppBarComponent
          left_icon_name={'left'}
          title={'PAYMENT'}
          Colors1={COLORS.white}
          onPressLeft_Icon={() => {
            navigation.goBack();
          }}
          left_position={10}
          right_position={10}
          top_position={50}
        />
      </View>
      <View style={ReusableStyles.rowWithSpace('space-between')}>
        <ReusableText
          props={'Price Per Night'}
          color={COLORS.black}
          size={SIZES.medium}
        />
        <ReusableText props={`400$`} color={COLORS.black} size={SIZES.medium} />
      </View>
    </View>
  );
};

export default Payments;
