import React from 'react';
import { View } from 'react-native';
import {COLORS,SIZES,TEXT} from "../../constants/theme"
import {ReusableText} from "../index"
const ReviewComponent = ({review_prop}) => {
     return( 
   <ReusableText 
    props={review_prop}
    size={SIZES.medium}
    color={COLORS.gray}/> 
    )
};

export default ReviewComponent;
