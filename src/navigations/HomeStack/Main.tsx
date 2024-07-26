import { View } from 'react-native'
import React from 'react'
import { useAppSeletor } from '../../hooks/redux'
import { Text, useTheme } from 'react-native-paper'

export default function Main() {
    const state = useAppSeletor(state => state.users)
    const theme = useTheme()
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
            <Text theme={theme} >Welcome back User</Text>
        </View>
    )
}