import { View } from "react-native"
import { responsive } from "../../utils/responsive/sizes"

export const HeightSpacer = ({ height }: { height: number }) => {
    return (
        <View style={{ marginVertical: responsive.height(height) }}>

        </View>
    )
}

export const WeightSpacer = ({ width }: { width: number }) => {
    return (
        <View style={{ marginHorizontal: responsive.width(width) }}>

        </View>
    )
}

