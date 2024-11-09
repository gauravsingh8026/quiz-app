import { Image, StyleSheet, Platform, View, ScrollView } from "react-native";

import Bg from "@/components/Bg";
import RoomModal from "@/components/RoomModal";
import { Button, Text, useTheme } from "react-native-paper";
import { Link, useNavigation } from "expo-router";
import { useState } from "react";
import { createRoom } from "../../../services/multiplayerService";
import { useCurrentUser } from "@/context/CurrentUserContext";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const { currentUser } = useCurrentUser();
  const router = useRouter();

  const navigation = useNavigation();
  const theme = useTheme();
  const [showRoomModal, setShowRoomModal] = useState(false);
  async function handleCreateRoom(quizSetting) {
    const roomId = await createRoom(currentUser.uid, quizSetting);
    // setShowRoomModal(false);
    // console.log(roomId);
    if (roomId) {
      navigateToRoom(roomId);
    }
  }
  function navigateToRoom(roomId) {
    setShowRoomModal(false);

    router.push({
      pathname: "/(tabs)/present/[roomId]",
      params: { roomId },
    });
  }
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
                Practice
              </Button>
            </Link>
            <Button
              mode="elevated"
              theme={theme}
              onPress={() => setShowRoomModal(true)}
            >
              Multiplayer
            </Button>
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
      <RoomModal
        visible={showRoomModal}
        onClose={() => setShowRoomModal(false)}
        onCreateRoom={handleCreateRoom}
        onJoinRoom={navigateToRoom}
      />
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
    flexWrap: "wrap",
  },
  scrollContent: {
    flexGrow: 1,
    paddingTop: 10, // Adjust to avoid overlapping with top section
    paddingHorizontal: 16,
  },
});
