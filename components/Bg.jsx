import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native";

import { useTheme } from "react-native-paper";
export default function Bg({ children }) {
  const theme = useTheme();
  return (
    <View
      style={[style.container, { backgroundColor: theme.colors.background }]}
    >
      {children}
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
