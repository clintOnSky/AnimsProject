import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#FFF",
        },
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
  );
};

export default RootLayout;
