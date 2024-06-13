import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import ReusableText from './ReusableText';
import { COLORS, SIZES } from '../../constants/theme';
import { AntDesign } from '@expo/vector-icons';
import ReusableStyles from './Reusable.style';
import WidthSpacer from './widthSpacer';

const Counter = ({ numberOfguestpop }) => {
  // Create State variables
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    if (numberOfguestpop === 4) {
      setCount(count + 1);
    }
  };
  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      setCount(count);
    }
  };
  return (
    <View style={ReusableStyles.rowWithSpace('space-between')}>
      <AntDesign
        name='minussquareo'
        size={26}
        onPress={() => {
          decrementCount();
        }}
        color={COLORS.gray}
      />
      <ReusableText
        props={` ${count} `}
        color={COLORS.black}
        size={SIZES.medium}
      />

      <AntDesign
        name='plussquareo'
        size={26}
        color={COLORS.gray}
        onPress={() => {
          incrementCount();
        }}
      />
    </View>
  );
};

export default Counter;
