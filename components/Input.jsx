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
  error = false,
  helperText = "",
}) => {
  return (
    <View className="w-[90%]">
      {/* Input Container */}
      <View
        className={`flex flex-row items-center h-[45px] bg-gray-100 rounded-lg px-4 ${
          error ? "border border-red-500" : ""
        } ${className}`}
      >
        {prefix && (
          <Text className="text-[#59595B] text-[15px] mr-2">{prefix}</Text>
        )}
        <TextInput
          className="flex-1 text-[15px] text-[#59595B]"
          placeholder={placeholder}
          keyboardType={keyboardType}
          placeholderTextColor={placeholderTextColor}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
      {/* Helper Text */}
      {error && helperText ? (
        <Text className="text-center text-red-500 text-[13px] mt-1">{helperText}</Text>
      ) : null}
    </View>
  );
};

export default Input;
