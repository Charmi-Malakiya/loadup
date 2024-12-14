import React from "react";
import { View, Text, TextInput } from "react-native";

const Input = ({
  label,
  prefix,
  placeholder,
  keyboardType = "default",
  placeholderTextColor = "#B8B8B8",
  value,
  onChangeText,
  className = "",
}) => {
  return (
    <View
      className={`flex flex-row items-center w-[90%] h-[45px] bg-gray-100 rounded-lg px-4 mb-4 ${className}`}
    >
      {prefix && <Text className="text-[#59595B] text-[15px] mr-2">{prefix}</Text>}
      <TextInput
        className="flex-1 text-[15px] text-[#59595B]"
        placeholder={placeholder}
        keyboardType={keyboardType}
        placeholderTextColor={placeholderTextColor}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default Input;
