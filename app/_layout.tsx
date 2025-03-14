import { Stack } from "expo-router";
import "@/global.css";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(root)" options={{ headerShown: false }} />
      <Stack.Screen name="movies/[id]" options={{ headerShown: false }} />
    </Stack>
  );
}
