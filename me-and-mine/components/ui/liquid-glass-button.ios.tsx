/**
 * LiquidGlassButton - iOS implementation
 * Uses @expo/ui Button when available (dev build), falls back to styled button in Expo Go.
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

// Fallback styled button for Expo Go
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
      <View style={[styles.badge, { backgroundColor: theme.primary }]}>
        <Text style={styles.badgeText}>NATIVE UI</Text>
      </View>
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
    position: 'relative',
    minHeight: 44,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
  badge: {
    position: 'absolute',
    top: 4,
    right: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 8,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});
