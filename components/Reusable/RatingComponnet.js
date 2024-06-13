import React from 'react';
import { View } from 'react-native';
import {COLORS,SIZES,TEXT} from "../../constants/theme"
import {ReusableText,WidthSpacer} from "../index"
import ReusableStyles from "./Reusable.style"
import { MaterialCommunityIcons } from '@expo/vector-icons';
const RatingComponent = ({rating_prop}) => {
 return(
<View style={ReusableStyles.rowWithSpace("flex-start")}>
    <MaterialCommunityIcons
    name='star'
    size={20}
    color={"#FD9942"}
    />
    <WidthSpacer width={0}/>
    <ReusableText 
    props={rating_prop}
    size={SIZES.medium}
    color={"#FD9942"}/> 
    </View>
    )
};

export default RatingComponent;
