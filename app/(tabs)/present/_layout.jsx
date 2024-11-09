import { Stack } from "expo-router";

export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="quiz" options={{ headerShown: true }} />
      <Stack.Screen
        name="[roomId]"
        options={{ headerShown: true, headerTitle: "Room" }}
      />
    </Stack>
  );
}
