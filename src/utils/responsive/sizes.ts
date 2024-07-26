import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
export const responsive = {
  width : (unit:number)=>scale(unit),
  height : (unit:number)=>verticalScale(unit),
  font : (unit:number,factor:number)=>moderateScale(unit,factor),
  scale: (unit:number)=>scale(unit),
}