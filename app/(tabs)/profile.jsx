import { View } from "react-native-web";
import { Button } from "react-native-paper";
import { useThemeMode } from "@/context/ThemeModeContext";
import Bg from "@/components/Bg";
export default function Profile() {
  const toggleTheme = useThemeMode();
  return (
    <Bg>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Button mode="contained" onPress={() => toggleTheme()}>
          Toggle Theme
        </Button>
      </View>
    </Bg>
  );
}
