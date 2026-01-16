import { Stack } from "expo-router";
export default function PublicLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Home", headerShown: false }}
      />
      <Stack.Screen name="about" options={{ title: "About" }} />
    </Stack>
  );
}
