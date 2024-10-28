import React, { useState } from "react";
import { View, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import { signUp, login } from "@/services/authService";
import { Text, Button, TextInput } from "react-native-paper";
const AuthScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  const handleAuth = async () => {
    if (isSignUp) {
      // Sign up logic here
      const response = await signUp(email, password);
      console.log(response);
    } else {
      // Sign in logic here
      const response = await login(email, password);
      console.log(response);
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
