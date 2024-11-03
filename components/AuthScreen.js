import React, { useState } from "react";
import { View, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import { signUp, login } from "@/services/authService";
import { Text, Button, TextInput } from "react-native-paper";
import { useNavigation } from "expo-router";
const AuthScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleAuth = async () => {
    // Basic validation
    if (!email || !password) {
      setError("Please fill in both email and password.");
      return;
    }

    setLoading(true); // Start loading
    setError(null); // Clear any previous errors

    try {
      const response = isSignUp
        ? await signUp(email, password)
        : await login(email, password);
      console.log("Authenticated user:", response);

      navigation.navigate("(tabs)");
    } catch (error) {
      // Handle specific error cases
      if (error.code === "auth/wrong-password") {
        setError("Incorrect password. Please try again.");
      } else if (error.code === "auth/user-not-found") {
        setError("No account found with this email.");
      } else {
        setError("Authentication failed. Please try again.");
      }
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const handleGuest = () => {
    // Logic for continuing as a guest
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          justifyContent: "center",
          alignItems: "stretch",
        }}
      >
        <View style={{ marginBottom: 16 }}>
          <Text variant="displayLarge">Quiz App</Text>
        </View>
        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          mode="outlined"
          style={{ marginBottom: 16 }}
          returnKeyType="next"
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          mode="outlined"
          style={{ marginBottom: 16 }}
        />
        <View>
          {error && (
            <Text
              variant="bodyMedium"
              style={{ color: "red", marginBottom: 8 }}
            >
              {error}
            </Text>
          )}
        </View>
        <Button
          mode="contained"
          title={isSignUp ? "Sign Up" : "Sign In"}
          onPress={handleAuth}
        >
          {isSignUp ? "Sign Up" : "Sign In"}
        </Button>

        <TouchableOpacity
          onPress={() => setIsSignUp(!isSignUp)}
          style={{ marginTop: 16 }}
        >
          <Text variant="bodyMedium" style={{ color: "blue" }}>
            {isSignUp
              ? "Already have an account? Sign In"
              : "Don’t have an account? Sign Up"}
          </Text>
        </TouchableOpacity>

        <Button
          mode="outlined"
          title="Continue as Guest"
          onPress={handleGuest}
          style={{ marginTop: 20 }}
        >
          Continue as Guest
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AuthScreen;
