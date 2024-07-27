import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useTheme } from 'react-native-paper'
import { AppTheme } from '../../utils/theme/type'
import { useAppTheme } from '../../hooks/theme'
import { useNavigation } from '@react-navigation/native'

export default function Home() {
    const { colors } = useAppTheme()
    const navigation = useNavigation()
    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {
                backgroundColor: colors.background,
            },
            headerTitleStyle: {
                color: colors.text

            }
        })
    }, [navigation])
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.background
        }}>
            <Text style={{
                color: colors.text
            }}>Welcome Home</Text>
        </View>
    )
}