import { configureFonts, MD3LightTheme as DefaultTheme } from 'react-native-paper';
import  fontConfig  from './font';


 const theme = {
  ...DefaultTheme,
   fonts: configureFonts({config: fontConfig}),
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },


};
export default theme