import { View, Text } from 'react-native'
import React from 'react'
import { SIZES, FONTS, COORS, SHADOWS, assets } from '../constants'

export const NFTTitle = () => {
    return (
        <></>
    )
}
export const ETHPrice = () => {
    return (
        <></>
    )
}

export const ImageCmp = () => {
    return (
        <></>
    )
}

export const People = () => {
    return (
        <View style={{ flexDirection: 'row' }}>
            {[assets.person02, assets.person03, assets.person04].map((imgUrl, index) => (
                <ImageCmp />
            ))}
        </View>
    )
}
export const EndDate = () => {
    return (
        <></>
    )
}
export const SubInfo = () => {
    return (
        <View style={{
            width: '100%',
            paddingHorizontal: SIZES.font,
            marginTop: -SIZES.extraLarge,
            flexDirection: 'row',
            justifyContent: 'center'
        }}>
            <People />
            <EndDate />

        </View>
    )
}