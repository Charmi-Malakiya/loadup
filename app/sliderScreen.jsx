import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: 1,
    title: { one: 'Book', two: 'Your Truck' },
    text: 'Description.\nSay something cool',
    image: require('../assets/images/image_2.png'),
    description: 'Find the perfect truck for your needs with \n just a few clicks. Get instant quotes and book \n your truck in seconds',
    backgroundColor: '#ffffff',
  },
  {
    key: 2,
    title: { one: 'Confirm', two: 'Your Quote' },
    text: 'Other cool stuff',
    image: require('../assets/images/image_3.png'),
    description: 'Review your booking details and confirm \n to receive a customised quote within \n 30 minutes based on your requirements',
    backgroundColor: '#ffffff',
  },
  {
    key: 3,
    title: { one: 'Ready', two: 'For Pickup' },
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    image: require('../assets/images/image_4.png'),
    description: 'Relax as our trusted drivers pick up \n your cargo on time. Track your shipment \n every step of the way',
    backgroundColor: '#ffffff',
  },
  {
    key: 4,
    title: { one: 'Delivery', two: 'Complete' },
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    image: require('../assets/images/image_5.png'),
    description: 'Your cargo arrives safely at its destination. \n Enjoy peace of mind with our reliable delivery \n service',
    backgroundColor: '#ffffff',
  }
];

const SliderScreen = () => {
  const navigation = useNavigation();
  // const [showRealApp, setShowRealApp] = useState(false);

  const renderItem = ({ item }) => {
    return (
      <View style={[styles.slide, { backgroundColor: item.backgroundColor }]}>
        <View className="flex justify-center items-center">
          <Image className='w-[148px] h-[50px]' source={require('../assets/images/logo.png')} />
          <Text className='font-RoundGothic-Text mt-[60px] mb-[10px] text-[22px] text-[#414042]'>{item?.title?.one}</Text>
          <Text className='font-RoundGothic-Bold leading-[40px] text-[33px] text-[#48CB74]'>{item?.title?.two}</Text>
        </View>
        <Image className='mt-[60px] w-[90vw] max-w-[350px] max-h-[215px]' source={item.image} />
        <Text className='mt-[60px] mb-10 text-[15px] font-[400px] text-[#414042] text-center leading-6 tracking-wider'>
          {item?.description}
        </Text>
      </View>
    );
  };

  const onDone = () => {
    // User finished the introduction
    // setShowRealApp(true);
    navigation.navigate('loginScreen');
  };

  // if (showRealApp) {
  //   return (
  //     <View style={styles.container}>
  //       <Text style={styles.mainAppText}>Welcome to the Real App!</Text>
  //     </View>
  //   );
  // }

  return <AppIntroSlider renderItem={renderItem} data={slides} onDone={onDone}
    activeDotStyle={{ backgroundColor: '#48CB74', height: 15, width: 15, borderRadius: 50 }}
    renderNextButton={() => (
      <Text className='py-[6px] px-[6px] mr-[10px] relative top-[6px] text-[#48CB74] text-[16px]'>
        Next  <AntDesign name="arrowright" size={15} color="#48CB74" />
      </Text>
    )}
    renderDoneButton={() => (
      <Text className='py-[6px] px-[6px] mr-[10px] relative top-[6px] text-[#48CB74] text-[16px]'>
        Next  <AntDesign name="arrowright" size={15} color="#48CB74" />
      </Text>
    )}
  />;
};

export default SliderScreen;

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: '#414042',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainAppText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#48CB74',
  },
});