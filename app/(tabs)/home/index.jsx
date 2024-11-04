import { Image, StyleSheet, Platform, View, ScrollView } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Bg from "@/components/Bg";
import { Button, Text, useTheme } from "react-native-paper";
import { Link, useNavigation } from "expo-router";
export default function HomeScreen() {
  const navigation = useNavigation();
  const theme = useTheme();
  return (
    <Bg>
      <View style={styles.container}>
        <View
          style={[
            styles.fixedTopSection,
            { backgroundColor: theme.colors.primaryContainer },
          ]}
        >
          <View style={styles.buttonContainer}>
            <Link href={"/(tabs)/home/quiz"} asChild>
              <Button
                mode="elevated"
                theme={theme}
                buttonColor={theme.colors.primary}
                textColor={theme.colors.onPrimary}
              >
                Start a Quiz
              </Button>
            </Link>
            <Link href={"/(tabs)/home/multiplayer"} asChild>
              <Button
                mode="elevated"
                theme={theme}
                buttonColor={theme.colors.primary}
                textColor={theme.colors.onPrimary}
              >
                Multiplayer
              </Button>
            </Link>
          </View>
        </View>
        <ScrollView
          contentContainerStyle={[
            styles.scrollContent,
            { backgroundColor: theme.colors.secondaryContainer },
          ]}
        >
          <Text
            variant="headlineLarge"
            style={{
              textAlign: "center",
              color: theme.colors.onSecondaryContainer,
            }}
          >
            Categories
          </Text>
        </ScrollView>
      </View>
    </Bg>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fixedTopSection: {
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    gap: 8,
  },
  scrollContent: {
    flexGrow: 1,
    paddingTop: 10, // Adjust to avoid overlapping with top section
    paddingHorizontal: 16,
  },
});
