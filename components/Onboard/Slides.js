import { View, Text, Image, StyleSheet } from 'react-native';
import { SIZES, SHADOWS, TEXT, COLORS } from '../../constants/theme';
import styles from './Slides.style';
import { ReusableText, ReusableBtn, HeighSpacer } from '../index';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
const Slides = ({ props }) => {
  const navigation = useNavigation();
  //   console.log(navigation);
  return (
    <View
      //  parent View has its flex property set to 1, which ensures it takes up all the available space. Then, in the Image component, the height is set to '100%', which makes it take up the full height of its parent container.
      style={{ flex: 1 }}
    >
      <Image style={styles.image} source={props.image} />
      <View style={styles.stack}>
        <ReusableText
          props={props.text}
          size={SIZES.xLarge}
          color={COLORS.white}
        />
        <HeighSpacer height={30} />
        <ReusableBtn
          width={(SIZES.width - 50) / 2.2}
          backgroundColor={COLORS.red}
          borderColor={COLORS.black}
          onPressprop={() => {
            navigation.navigate('BottomTabNavigation');
          }}
          TextColor={COLORS.white}
          button_name_prop={"Let's Go Homie"}
          borderWidth={0}
        />
      </View>
    </View>
  );
};
export default Slides;
