import {StyleSheet } from 'react-native';
import { COLORS } from '../../constants/theme';
const HotelDetailStyles=StyleSheet.create({
container:{
    paddingTop:20,
    marginHorizontal:10,
},
titleContainer:{
    margin:15,
    backgroundColor:COLORS.lightWhite,
    height:120,
    // For the contianer to overlap the NetworkImage
    // position absolute allows us to place the component on top of an other
    position: 'absolute',
    top:100,
    left:0,
    right:0,
    borderRadius:20,
},
titleColumn:{
    padding:15,
}
})
export default HotelDetailStyles;