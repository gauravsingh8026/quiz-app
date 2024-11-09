import React, { useState } from "react";
import { SafeAreaView, ScrollView } from "react-native-web";

import { Modal, View, StyleSheet, TouchableOpacity } from "react-native";
import {
  useTheme,
  TextInput,
  RadioButton,
  Text,
  Button,
} from "react-native-paper";
const INITIALQUIZSETTING = {
  // category: "",
  roomName: "",
  difficulty: "easy",
  roomCode: "",
  timeAllowed: "",
  questionsCount: 10,
  questionsType: "multiple",
};
export default function RoomModal({
  visible,
  onClose,
  onCreateRoom,
  onJoinRoom,
}) {
  const theme = useTheme();
  const [quizSetting, setQuizSetting] = useState(INITIALQUIZSETTING);

  const [roomCode, setRoomCode] = useState("");

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <ScrollView contentContainerStyle={styles.modalOverlay}>
        <View
          style={[
            styles.modalContainer,
            { backgroundColor: theme.colors.secondaryContainer },
          ]}
        >
          <Text
            style={[
              styles.modalTitle,
              { color: theme.colors.onSecondaryContainer },
            ]}
          >
            Multiplayer Options
          </Text>

          {/* Room Creation Section */}
          <Text
            style={[
              styles.sectionTitle,
              { color: theme.colors.onSecondaryContainer },
            ]}
          >
            Create Room
          </Text>
          <TextInput
            placeholder="Room Name (optional)"
            value={quizSetting.roomName}
            onChangeText={(newValue) => {
              setQuizSetting((prev) => ({ ...prev, roomName: newValue }));
            }}
            mode="outlined"
            // style={styles.input}
          />

          <RadioButton.Group
            onValueChange={(newValue) =>
              setQuizSetting({ ...quizSetting, difficulty: newValue })
            }
            value={quizSetting.difficulty}
          >
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <View style={styles.radioOptionView}>
                <RadioButton value="easy" />
                <Text style={{ color: theme.colors.onSecondaryContainer }}>
                  Easy
                </Text>
              </View>
              <View style={styles.radioOptionView}>
                <RadioButton value="medium" />
                <Text style={{ color: theme.colors.onSecondaryContainer }}>
                  Medium
                </Text>
              </View>
              <View style={styles.radioOptionView}>
                <RadioButton value="hard" />
                <Text style={{ color: theme.colors.onSecondaryContainer }}>
                  Hard
                </Text>
              </View>
            </View>
          </RadioButton.Group>

          <Button
            title="Create Room"
            onPress={() => onCreateRoom(quizSetting)}
            mode="contained"
            style={styles.input}
          >
            Create Room
          </Button>

          {/* Divider */}
          <View style={styles.divider} />

          {/* Room Joining Section */}
          <Text
            style={[
              styles.sectionTitle,
              { color: theme.colors.onSecondaryContainer },
            ]}
          >
            Join Room
          </Text>
          <TextInput
            placeholder="Enter Room Code"
            value={roomCode}
            onChangeText={setRoomCode}
            mode="outlined"
            maxLength={4}
            style={styles.input}
          />
          <Button
            title="Join Room"
            onPress={() => onJoinRoom(roomCode)}
            mode="contained"
          >
            Join Room
          </Button>

          {/* Close Modal Button */}
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    // width: "80%",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginVertical: 10,
  },
  input: {
    // width: "100%",
    // padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    marginBottom: 10,
  },
  divider: {
    height: 1,
    width: "100%",
    backgroundColor: "#ccc",
    marginVertical: 15,
  },
  closeButton: {
    marginTop: 15,
  },
  closeButtonText: {
    color: "#007AFF",
    fontSize: 16,
  },
  radioOptionView: { flexDirection: "row", alignItems: "center" },
});
