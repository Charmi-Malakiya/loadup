import React, { useState, useRef, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView, Alert } from "react-native";
import Button from "../components/Button";
import { useRouter } from "expo-router";

const OTPVerification = () => {
    const router = useRouter();

    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [timer, setTimer] = useState(30);
    const inputs = useRef([]);

    useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
            return () => clearInterval(interval);
        }
    }, [timer]);

    const handleChange = (text, index) => {
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);

        if (text && index < inputs.current.length - 1) {
            inputs.current[index + 1].focus();
        }
    };

    const handleKeyPress = (e, index) => {
        if (e.nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
            inputs.current[index - 1].focus();
        }
    };

    const resendOTP = () => {
        setTimer(30);
        // Trigger OTP resend logic here
        Alert.alert("OTP Resent", "A new OTP has been sent to your number.");
    };

    const validateOtp = () => {
        const enteredOtp = otp.join("");
        if (enteredOtp.length !== 6) {
            Alert.alert("Validation Error", "Please enter a 6-digit OTP.");
            return false;
        }
        return true;
    };

    const handleSubmit = () => {
        if (validateOtp()) {
            // Add your OTP verification logic here (e.g., API call)
            Alert.alert("Success", "OTP Verified Successfully!");
            router.push("/homeScreen");
        }
    };

    return (
        <SafeAreaView>
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                showsVerticalScrollIndicator={false}
            >
                <View className="flex justify-center items-center h-[100vh] bg-white">
                    <Text className="text-[27px] font-[800] text-[#434244] mb-4">OTP Verification</Text>
                    <Text className="text-[16px] font-[400] text-[#434244] mb-1">We’ve sent a verification code to</Text>
                    <Text className="text-[16px] font-[600] text-[#434244]">+91 95378 20865</Text>

                    <View className="flex-row justify-between w-full my-5 px-5">
                        {otp.map((_, index) => (
                            <TextInput
                                key={index}
                                className="w-12 h-12 border border-gray-300 rounded-md text-center text-lg bg-gray-100"
                                keyboardType="number-pad"
                                maxLength={1}
                                value={otp[index]}
                                onChangeText={(text) => handleChange(text, index)}
                                onKeyPress={(e) => handleKeyPress(e, index)}
                                ref={(ref) => (inputs.current[index] = ref)}
                            />
                        ))}
                    </View>

                    <TouchableOpacity disabled={timer > 0} onPress={resendOTP}>
                        <Text className="text-[12px] font-[400] text-[#B1B3B6] mb-6">
                            Resend OTP in{" "}
                            <Text className="text-[12px] font-[400] text-[#48CB74]">
                                {`00:${timer < 10 ? `0${timer}` : timer}`}
                            </Text>{" "}
                            Seconds
                        </Text>
                    </TouchableOpacity>
                    <Button title="Submit" onPress={handleSubmit} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default OTPVerification;
