// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from "expo-font";
import { Stack, Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { createContext, useContext, useEffect, useState } from "react";
import "react-native-reanimated";
import { useColorScheme } from "@/hooks/useColorScheme";
import { lightTheme, darkTheme } from "@/theme.config";
// import { PaperProvider } from 'react-native-paper';
import { PaperProvider } from "react-native-paper";
import { CurrentUserProvider } from "@/context/CurrentUserContext";
import { ThemeModeProvider } from "@/context/ThemeModeContext";
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // const colorScheme = useColorScheme();
  const [loaded] = useFonts({
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

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  const theme = isDarkTheme ? darkTheme : lightTheme;
  return (
    <ThemeModeProvider value={toggleTheme}>
      <CurrentUserProvider>
        <PaperProvider theme={theme}>
          <Stack>
            {/* Essential for handling nested routes based on current state */}
            {/* Define screens and their options */}
            <Stack.Screen
              name="index" // Auth screen at the root
              options={{ headerShown: false, headerTitle: "Quiz-App" }}
            />
            <Stack.Screen
              name="(tabs)" // Main app tabs or other screens after login
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="+not-found"
              options={{ title: "Not Found", headerShown: true }}
            />
          </Stack>
        </PaperProvider>
      </CurrentUserProvider>
    </ThemeModeProvider>
  );
}
