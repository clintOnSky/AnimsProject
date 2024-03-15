import { Stack } from "expo-router";
import { View } from "react-native";

const RootLayout = () => {
  return (
    <View style={{ flex: 1, paddingTop: 20 }}>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#FFF",
          },
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: "Home",
          }}
        />
        <Stack.Screen
          name="[id]"
          options={{
            title: "",
          }}
        />
      </Stack>
    </View>
  );
};

export default RootLayout;
