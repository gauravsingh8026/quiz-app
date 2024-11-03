import { Image, StyleSheet, Platform } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Bg from "@/components/Bg";
import { Button, useTheme } from "react-native-paper";
import { Link, useNavigation } from "expo-router";
export default function HomeScreen() {
  const navigation = useNavigation();
  const theme = useTheme();
  return (
    <Bg>
      <Button
        mode="elevated"
        theme={theme}
        onPress={() => navigation.navigate("quiz")}
      >
        Start a Quiz
      </Button>
    </Bg>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
