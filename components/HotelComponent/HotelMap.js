import { View,StyleSheet,TouchableOpacity } from "react-native"
import MapView,{Marker} from "react-native-maps";
const HotelMap=({hotelCoordinates})=>{
return(
    <TouchableOpacity onPress={()=>{}}>
        <MapView
        style={HoteMapStyle.mapStyle}
        region={hotelCoordinates}>
            <Marker
            coordinate={hotelCoordinates}
            title={hotelCoordinates.title}/>

        </MapView>

    </TouchableOpacity>)
}
export default HotelMap;
const HoteMapStyle=StyleSheet.create({
mapStyle:{
    height:190,
    width:"100%",
    borderRadius:12,
}
})