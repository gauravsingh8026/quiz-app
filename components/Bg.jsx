import { StyleSheet, View } from "react-native";
import { useTheme } from "react-native-paper";

export default function Bg({ children }) {
  const theme = useTheme();
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.colors.primaryContainer },
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    // justifyContent: "center",
    // alignItems: "center",
  },
});
