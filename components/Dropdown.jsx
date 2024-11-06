import React, { useState } from "react";
import { View, Text } from "react-native";
import { Button, Menu, useTheme } from "react-native-paper";

export default function DropdownMenu({ data = [] }) {
  const theme = useTheme();
  const [visible, setVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Option 1");

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    closeMenu();
  };

  return (
    <View style={{ padding: 16 }}>
      <Text>Selected: {selectedOption}</Text>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={<Button onPress={openMenu}>Select an Option</Button>}
      >
        {data.map(function (item, index) {
          return (
            <Menu.Item
              key={index}
              onPress={() => handleOptionSelect(item.value)}
              title={item.label}
            />
          );
        })}
      </Menu>
    </View>
  );
}
