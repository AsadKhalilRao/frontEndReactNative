import React, {  } from 'react';
import { View,Text,StyleSheet, } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

 const Location=()=> {
  // Creating a Variable coordinates
const coordinates ={

  // Creating latitude key
  latitude:35.58,
  longitude:139.68884,
  latitudeDelta:0.01,
  longitudeDelta:0.01,
  title:"My Location"
}  
return (
       <MapView initialRegion={coordinates}
       style={styles.mapStyles}
       >
        <Marker coordinate={coordinates}
        title={coordinates.title}/>
       </MapView>
      );
}
export default Location;
const styles=StyleSheet.create({

  mapStyles:{
  // Using the spread operator
  ...StyleSheet.absoluteFillObject
}

})