// YT Video Left at 1:01:00 min
// https://youtu.be/_ivIUCSOZ78

import { View, Text, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { COLORS, SIZES, SHADOWS, assets } from '../constants'
import { CircleButton, RectButton } from './Button'
import { SubInfo, ETHPrice, NFTTitle } from './SubInfo'


const NFTCard = ({ data }) => {

    const navigation = useNavigation()

    return (
        <View style={{
            backgroundColor: COLORS.white,
            borderRadius: SIZES.font,
            marginBottom: SIZES.extraLarge,
            margin: SIZES.base,
            ...SHADOWS.dark
        }}>
            <View style={{ width: '100%', height: 250 }}>
                <Image source={data.image}
                    resizeMode="cover"
                    style={{
                        height: '100%', width: '100%',
                        borderTopLeftRadius: SIZES.font,
                        borderTopRightRadius: SIZES.font
                    }} />
                <CircleButton imgUrl={assets.heart} right={10} top={10} />
            </View>

            <SubInfo />
        </View>
    )
}

export default NFTCard