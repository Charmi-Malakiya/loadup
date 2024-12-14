import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import Button from '../components/Button';

const index = () => {
    const router = useRouter();
    return (
        <SafeAreaView>
            <View className="flex justify-center items-center h-[100vh] bg-white">
                <Image className='w-[148px] h-[50px]' source={require('../assets/images/logo.png')} />
                <Text className='font-RoundGothic-Text mt-[60px] mb-[10px] text-[22px] text-[#414042]'>Your Reliable</Text>
                <Text className='font-RoundGothic-Bold leading-[40px] text-[33px] text-[#48CB74]'>Trucking Partner</Text>
                <Image className='mt-[60px] w-[90vw] max-w-[350px] max-h-[215px]' source={require('../assets/images/image_1.png')} />
                <Text className='mt-[60px] mb-10 text-[15px] font-[400px] text-[#414042] text-center leading-6 tracking-wider'>
                    We offer a wide range of trucks to suit your{"\n"}
                    specific needs. Book your truck online in three{"\n"}
                    simple steps.
                </Text>
                <Button
                    title="Get Started" width={165} onPress={() => router.push('/sliderScreen')}
                />
            </View>
        </SafeAreaView>
    );
};

export default index;
