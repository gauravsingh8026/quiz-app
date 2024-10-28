// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { lightTheme, darkTheme } from '@/theme.config';
// import { PaperProvider } from 'react-native-paper';
import { Button, PaperProvider, Switch, Text } from 'react-native-paper';

import Bg from '@/components/Bg';
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  const theme = isDarkTheme ? darkTheme : lightTheme;
  return (

    <PaperProvider theme={theme}>
         <Stack>
          <Stack.Screen name="index" options={{ headerShown: false,headerTitle:'Quiz-App'}} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      {/* <Bg>
      </Bg> */}
       
    </PaperProvider>
    
  );
}
