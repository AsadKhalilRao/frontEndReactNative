import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SIZES, SHADOWS, TEXT, COLORS } from '../../constants/theme';
// import styles from "./Slides.style";
import {
  ReusableText,
  ReusableBtn,
  Recommendations,
  HeighSpacer,
  PlacesForHome,
  BestHostelComponent,
} from '../../components/index';
import ReusableStyles from '../../components/Reusable/Reusable.style';
import HomeStyles from '../../screens/home/home.style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={ReusableStyles.container}>
      <View>
        <View style={ReusableStyles.rowWithSpace('space-between')}>
          <ReusableText
            props={'Hi User'}
            size={SIZES.large}
            color={COLORS.black}
          />
          <TouchableOpacity
            style={HomeStyles.box}
            onPress={() => {
              navigation.navigate('Search');
            }}
          >
            <AntDesign name='search1' size={26} />
          </TouchableOpacity>
        </View>
        <View>
          <HeighSpacer height={SIZES.medium} />
          <ReusableText
            props={'Places'}
            size={SIZES.large}
            color={COLORS.black}
          />

          <PlacesForHome />
        </View>
        <Recommendations />
        <HeighSpacer height={10} />
        <BestHostelComponent />
      </View>
    </SafeAreaView>
  );
};
export default Home;
