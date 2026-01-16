/**
 * LiquidGlassButton - iOS implementation
 * Falls back to styled React Native button.
 * Native @expo/ui Button can be enabled in a development build when stable.
 */

import { Pressable, Text, View, StyleSheet, type ViewStyle } from 'react-native';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { colors, borderRadius, spacing } from '@/constants/tokens';

interface LiquidGlassButtonProps {
  /** Button label */
  children: string;
  /** Called when button is pressed */
  onPress?: () => void;
  /** Additional styles */
  style?: ViewStyle;
}

export function LiquidGlassButton({ children, onPress, style }: LiquidGlassButtonProps) {
  const colorScheme = useColorScheme() ?? 'light';
  const theme = colors[colorScheme];

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: pressed
            ? theme.backgroundTertiary
            : theme.backgroundSecondary,
          borderColor: theme.border,
        },
        style,
      ]}
    >
      <Text style={[styles.text, { color: theme.text }]}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: spacing['3'],
    paddingHorizontal: spacing['4'],
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 44,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
});
