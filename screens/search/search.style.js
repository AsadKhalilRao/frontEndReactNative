import { StyleSheet } from 'react-native';
import { SIZES, COLORS } from '../../constants/theme';
// Creating our style
const styles = StyleSheet.create({
  searchContainer: {
    // Since our search container is going to be the row
    // Hence first we want to have flex direction as row
    flexDirection: 'row',
    // Aligns the children along the main axis
    // (which is horizontal in this case) to the center of the container.
    justifyContent: 'center',
    // aligns the children along the cross axis
    // (which is vertical in this case) to the center of the container.
    alignContent: 'center',
    marginHorizontal: SIZES.small,
    // Everytime we include borderColor we need to
    // include borderWidth, to see the borderColor
    borderColor: COLORS.blue,
    // By default borderWidth is going to be the 0
    borderWidth: 1,
    borderRadius: SIZES.medium,
    // Giving Height to the View
    height: 50,
    marginVertical: SIZES.medium,
  },
  textInputStyle: {
    // TextInput will take the 100% width of  <View style={styles.searchContainer}></View>
    width: '100%',
    // TextInput will take the 100% height of  <View style={styles.searchContainer}></View>
    height: '100%',
  },
  searchWrapper: {
    // Tells the component to grow and fill the available space
    // within its container. This essentially means that it will
    // take up all the available space not occupied by other
    // flex items in its container.
    flex: 1,

    marginRight: SIZES.small,
    borderRadius: SIZES.medium,
  },
  searchBtn: {
    height: '100%',
    // Not giving 100% width cause it would take with of entire
    // row <View style={styles.searchContainer}></View>
    width: 50,
    borderRadius: SIZES.small,
    // Justifying what ever is inside
    // <TouchableOpacity style={styles.searchBtn}></TouchableOpacity>
    //vertically center
    justifyContent: 'center',
    // Aligning what ever is inside
    // <TouchableOpacity style={styles.searchBtn}></TouchableOpacity>
    //Horizontally center
    alignItems: 'center',
    backgroundColor: COLORS.lightBlue,
  },
  searchImage: {
    resizeMode: 'contain',
    width: '100%',
    height: SIZES.height / 2.2,
    paddingHorizontal: 10,
  },
  tile: {
    marginHorizontal: 12,
    marginBottom: 20,
  },
});
export default styles;
