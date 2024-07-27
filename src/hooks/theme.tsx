import { useTheme } from "react-native-paper";
import { AppTheme } from "../utils/theme/type";

export const useAppTheme = () => useTheme<AppTheme>();
