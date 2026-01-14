import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="modal"
          options={{
            presentation: 'formSheet',
            sheetAllowedDetents: [0.25, 0.5, 1.0], // Android supports max 3 detents
            sheetGrabberVisible: true,
            sheetCornerRadius: 24,
            sheetExpandsWhenScrolledToEdge: true,
            sheetLargestUndimmedDetentIndex: 0,
            headerShown: true,
            title: 'Native Bottom Sheet',
          }}
        />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
