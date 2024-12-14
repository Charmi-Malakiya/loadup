import { View, Text, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import Button from '../components/Button';
import { HelloWave } from '../components/HelloWave';
import Input from '../components/Input';

const loginScreen = () => {
    const router = useRouter();
    const [mobileNumber, setMobileNumber] = useState('');
    const [error, setError] = useState('');
    const [otpSentMessage, setOtpSentMessage] = useState(''); // For temporary message display

    const validateMobileNumber = () => {
        const mobileNumberRegex = /^[6-9]\d{9}$/; // Matches a valid 10-digit Indian mobile number starting with 6-9
        if (!mobileNumberRegex.test(mobileNumber)) {
            setError('Please enter a valid 10-digit mobile number.');
            return false;
        }
        setError('');
        return true;
    };

    const handleLogin = () => {
        if (validateMobileNumber()) {
            // Show OTP sent message
            Alert.alert('OTP Sent', `An OTP has been sent to +91 ${mobileNumber}`);
            setOtpSentMessage(`An OTP has been sent to +91 ${mobileNumber}`);

            // Navigate to the OTP screen after displaying the message
            setTimeout(() => {
                router.push('/otpScreen');
            }, 2000); // Delay navigation for 2 seconds to show the message
        } else {
            Alert.alert('Validation Error', 'Please provide a valid mobile number.');
        }
    };

    return (
        <SafeAreaView>
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                showsVerticalScrollIndicator={false}
            >
                <View className="flex justify-center items-center h-[100vh] bg-white">
                    <Image className="w-[148px] h-[50px]" source={require('../assets/images/logo.png')} />
                    <Text className="font-RoundGothic-Text mt-[60px] mb-[10px] text-[22px] text-[#414042]">Your Reliable</Text>
                    <Text className="font-RoundGothic-Bold leading-[40px] text-[33px] text-[#48CB74]">Trucking Partner</Text>
                    <Image
                        className="mt-[60px] w-[90vw] max-w-[350px] max-h-[215px]"
                        source={require('../assets/images/image_6.png')}
                    />
                    <View className="mt-[30px] flex flex-row justify-start items-center w-[90%]">
                        <Text className="mr-1 text-[22px] font-[700] text-[#434244]">Welcome</Text>
                        <HelloWave />
                    </View>
                    <Text className="mt-5 mb-5 text-[15px] font-[400px] text-[#414042] text-left leading-6 tracking-wider">
                        With a valid number, you can access deliveries,{"\n"} and our other services
                    </Text>
                    <Input
                        prefix="+91"
                        placeholder="Mobile Number"
                        keyboardType="phone-pad"
                        value={mobileNumber}
                        onChangeText={(text) => setMobileNumber(text)}
                        onBlur={validateMobileNumber}
                    />
                    {error ? (
                        <Text className="text-red-500 text-[12px] mb-2">{error}</Text>
                    ) : null}
                    {otpSentMessage ? (
                        <Text className="text-green-500 text-[12px] mb-2">{otpSentMessage}</Text>
                    ) : null}
                    <Button title="Login" onPress={handleLogin} />
                    <Text className="mt-3 text-[11px] text-[#414042] text-center">
                        By clicking on login you agree to the{" "}
                        <Text className="text-[#33B45E]">Terms of Service</Text> &{" "}
                        <Text className="text-[#33B45E]">Privacy Policy</Text>
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default loginScreen;
