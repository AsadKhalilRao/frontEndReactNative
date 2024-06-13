import { SIZES, SHADOWS, TEXT, COLORS } from '../../constants/theme';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  image: {
    resizeMode: 'cover',
    width: SIZES.width,
    height: '100%',
  },
  stack: {
    position: 'absolute',
    bottom: 0,
    marginBottom: 40,
    marginLeft: 10,
  },
});
export default styles;
