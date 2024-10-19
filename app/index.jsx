import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen() {
  const navigation = useNavigation();

  const continueAsGuest = () => {
    navigation.navigate("(tabs)"); // Navigates to the quiz screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>QuizApp</Text>
      <Button title="Continue as Guest" onPress={continueAsGuest} />
      {/* Login buttons for Google, Facebook, etc. can be added later */}
    </View>
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
