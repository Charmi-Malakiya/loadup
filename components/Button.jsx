// CustomButton.js
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({ title, backgroundColor, onPress, textColor, fontSize, fontWeight, paddingVertical, paddingHorizontal, width, height }) => {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: backgroundColor || '#33B45E', // Default color
                width: width || '90%',
                height: height || 45,
                borderRadius: 8,
                alignItems: 'center',
                justifyContent:'center'
            }}
            onPress={onPress}
        >
            <Text style={{
                color: textColor || 'white', // Default text color
                fontSize: fontSize || 17, // Default font size
                fontWeight: fontWeight || '700', // Default font weight
            }}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default Button;
