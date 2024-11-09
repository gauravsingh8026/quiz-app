import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Divider, Text, useTheme } from "react-native-paper";
import { ScrollView, View } from "react-native-web";
import { getRoom } from "../../../services/multiplayerService";
import Bg from "../../../components/Bg";
import { HelloWave } from "../../../components/HelloWave";
import { List } from "react-native-paper";
import useRoom from "../../../hooks/useRoom";
export default function Page() {
  const { roomId } = useLocalSearchParams();
  const theme = useTheme();
  const { roomData: room, isLoading, error } = useRoom(roomId);
  // const [room, setRoom] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);
  // useEffect(() => {
  //   const fetchRoomData = async () => {
  //     const roomData = await getRoom(roomId);
  //     console.info(roomData);
  //     if (roomData) {
  //       setError(null);
  //       setRoom(roomData);
  //     } else {
  //       setError("Invalid Room Code");
  //     }
  //     setIsLoading(false);
  //   };
  //   fetchRoomData();
  // }, [roomId]);

  return (
    <Bg>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          alignItems: "stretch",
        }}
      >
        {isLoading ? (
          <HelloWave />
        ) : error ? (
          <Text>{error}</Text>
        ) : (
          <View style={{}}>
            <Text
              variant="headlineLarge"
              style={{ color: theme.colors.primary, alignSelf: "center" }}
            >
              {room.quizSettings.roomName}
            </Text>
            <Divider style />
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text variant="labelLarge">Room Code</Text>
              <Text variant="labelLarge">{room.roomId}</Text>
            </View>
            <Divider style />
            <Text variant="labelLarge">Players</Text>
            {room.players.map((player, index) => (
              <List.Item
                title={player.id}
                left={(props) => <Text>{index + 1}</Text>}
                key={player.id}
              />
            ))}
          </View>
        )}
      </ScrollView>
    </Bg>
  );
}
