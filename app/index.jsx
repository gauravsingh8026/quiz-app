import React from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Bg from "../components/Bg";
import { Button, Text, TextInput } from "react-native-paper";
import AuthScreen from "../components/AuthScreen";
export default function WelcomeScreen() {
  const navigation = useNavigation();

  const continueAsGuest = () => {
    navigation.navigate("(tabs)"); // Navigates to the quiz screen
  };

  return (
    <Bg>
      <AuthScreen />
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
