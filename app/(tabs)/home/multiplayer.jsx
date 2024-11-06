import React, { useState } from "react";
import { View, Text } from "react-native";
import { Button, TextInput, RadioButton } from "react-native-paper";
import Bg from "@/components/Bg";
import DropdownMenu from "../../../components/Dropdown";

const dropdownData = [
  {
    label: "General Knowledge",
    value: "general",
  },
  {
    label: "Science",
    value: "science",
  },
  {
    label: "History",
    value: "history",
  },
  {
    label: "Sports",
    value: "sports",
  },
  {
    label: "Art",
    value: "art",
  },
  {
    label: "Geography",
    value: "geography",
  },
  {
    label: "Entertainment",
    value: "entertainment",
  },
  {
    label: "Politics",
    value: "politics",
  },
  {
    label: "Animals",
    value: "animals",
  },
  {
    label: "Vehicles",
    value: "vehicles",
  },
  {
    label: "Comics",
    value: "comics",
  },
  {
    label: "Gadgets",
    value: "gadgets",
  },
  {
    label: "Anime & Manga",
    value: "anime",
  },
  {
    label: "Cartoons & Animations",
    value: "cartoons",
  },
];
const MultiplayerSetupScreen = () => {
  // State for options
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("easy");
  const [roomCode, setRoomCode] = useState("");

  const handleStartRoom = () => {
    // Logic for creating a new room (to be implemented)
  };

  const handleJoinRoom = () => {
    // Logic for joining a room using roomCode (to be implemented)
  };

  return (
    <Bg>
      <View style={{ flex: 1, padding: 20 }}>
        <Text style={{ fontSize: 24, marginBottom: 20 }}>
          Multiplayer Setup
        </Text>
        {/* Category Selection */}
        {/* <Dropdown
          label="Select Category"
          value={category}
          onValueChange={(value) => setCategory(value)}
          options={[
            { label: "General Knowledge", value: "general" },
            { label: "Science", value: "science" },
            { label: "History", value: "history" },
            // Add more categories as needed
          ]}
        /> */}
        <DropdownMenu data={dropdownData} />
        {/* Difficulty Selection */}
        <Text style={{ marginTop: 20 }}>Select Difficulty</Text>
        <RadioButton.Group
          onValueChange={(newValue) => setDifficulty(newValue)}
          value={difficulty}
        >
          <RadioButton.Item label="Easy" value="easy" />
          <RadioButton.Item label="Medium" value="medium" />
          <RadioButton.Item label="Hard" value="hard" />
        </RadioButton.Group>
        {/* Room Code for Joining */}
        <TextInput
          label="Room Code (for joining)"
          value={roomCode}
          onChangeText={(text) => setRoomCode(text)}
          style={{ marginTop: 20 }}
        />
        {/* Buttons for Creating or Joining a Room */}
        <Button
          mode="contained"
          onPress={handleStartRoom}
          style={{ marginTop: 30 }}
        >
          Create Room
        </Button>
        <Button
          mode="outlined"
          onPress={handleJoinRoom}
          style={{ marginTop: 10 }}
        >
          Join Room
        </Button>
      </View>
    </Bg>
  );
};

export default MultiplayerSetupScreen;
