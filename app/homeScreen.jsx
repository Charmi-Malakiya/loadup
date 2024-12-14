import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const homeScreen = () => {
    return (
        <SafeAreaView>
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                showsVerticalScrollIndicator={false}
            >
                <View className="py-[61px] px-8 h-[100vh] bg-white">
                    <View className="flex flex-row items-center">
                        <Image className='mr-3 w-[40px] h-[40px]' source={require('../assets/images/user.png')} />
                        <View>
                            <Text className='text-[18px] font-[700] text-[#414042]'>Hello, User</Text>
                            <Text className='text-[14px] font-[400] text-[#59595B]'>Let’s Start</Text>
                        </View>
                    </View>
                    <Image className='mt-[60px] w-[90vw] max-w-[350px] max-h-[215px]' source={require('../assets/images/image_7.png')} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default homeScreen