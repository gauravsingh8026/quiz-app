import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Bg from "../components/Bg";
export default function WelcomeScreen() {
  const navigation = useNavigation();

  const continueAsGuest = () => {
    navigation.navigate("(tabs)"); // Navigates to the quiz screen
  };

  return (
    <Bg>
      <Text style={styles.logo}>QuizApp</Text>
      <Button title="Continue as Guest" onPress={continueAsGuest} />
    </Bg>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    fontSize: 32,
    marginBottom: 20,
  },
});
