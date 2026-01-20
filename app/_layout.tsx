import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
SplashScreen.preventAutoHideAsync();
SplashScreen.setOptions({
  duration: 250,
  fade: true,
});

export default function RootLayout() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}

const App = () => {
  const { user, initializing } = useAuth();

  useEffect(() => {
    if (!initializing) {
      SplashScreen.hide();
    }
  }, [initializing]);

  if (initializing) return null;
  //stack automatically goes to !user, causes glitch in the begining, so
  //intializing state which returns null(nothing) then the stack checks for user
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Protected guard={!user}>
        <Stack.Screen name="(public)"></Stack.Screen>
      </Stack.Protected>
      <Stack.Protected guard={!!user}>
        <Stack.Screen name="(app)"></Stack.Screen>
      </Stack.Protected>
    </Stack>
  );
};
