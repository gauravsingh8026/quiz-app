import React from "react";
import Bg from "../components/Bg";
import AuthScreen from "../components/AuthScreen";

import { HelloWave as LoadingScreen } from "@/components/HelloWave";

import { useEffect, useState } from "react";

import { useRouter } from "expo-router";
import { useCurrentUser } from "@/context/CurrentUserContext";
export default function WelcomeScreen() {
  const router = useRouter();

  const { currentUser, loading } = useCurrentUser();
  const [redirecting, setRedirecting] = useState(true);

  useEffect(() => {
    if (!loading) {
      if (currentUser) {
        router.replace("/(tabs)/present"); // Redirect to main screen if logged in
      } else {
        setRedirecting(false); // Only set redirecting to false if no user
      }
    }
  }, [currentUser, loading, router]);

  return <Bg>{loading || redirecting ? <LoadingScreen /> : <AuthScreen />}</Bg>;
}
