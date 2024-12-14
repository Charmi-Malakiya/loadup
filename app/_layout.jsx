import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import Toast from "react-native-toast-message";
import "react-native-reanimated";
import "../global.css";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    RoundGothic: require("../assets/fonts/RoundGothic.ttf"),
    RoundGothic_Text: require("../assets/fonts/RoundGothic-text.otf"),
    RoundGothic_Bold: require("../assets/fonts/RoundGothic-bold.otf"),
    Poppins_Regular: require("../assets/fonts/Poppins-Regular.ttf"),
    Poppins_Bold: require("../assets/fonts/Poppins-Bold.ttf"),
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="sliderScreen" options={{ headerShown: false }} />
        <Stack.Screen name="loginScreen" options={{ headerShown: false }} />
        <Stack.Screen name="otpScreen" options={{ headerShown: false }} />
        <Stack.Screen name="homeScreen" options={{ headerShown: false }} />
      </Stack>
      <Toast />
      <StatusBar style="auto" backgroundColor="white" />
    </ThemeProvider>
  );
}
