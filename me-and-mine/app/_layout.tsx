import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { createSheetOptions } from '@/constants/sheet-presets';
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
          options={createSheetOptions('confirmDismiss', {
            title: 'Confirm + Dismiss',
          })}
        />
        <Stack.Screen
          name="sheet-default"
          options={createSheetOptions('default', {
            title: 'Default Sheet',
          })}
        />
        <Stack.Screen
          name="sheet-dismiss"
          options={createSheetOptions('dismissOnly', {
            title: 'Dismiss Only',
          })}
        />
        <Stack.Screen
          name="sheet-fullscreen"
          options={createSheetOptions('fullScreen', {
            title: 'Full Screen',
          })}
        />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
