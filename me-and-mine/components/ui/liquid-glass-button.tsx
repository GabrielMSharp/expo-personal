/**
 * LiquidGlassButton - Web fallback
 * Renders a styled placeholder button with a "Native UI" badge.
 * On iOS/Android, the platform-specific files render the real native component.
 */

import { Pressable, Text, StyleSheet, type ViewStyle, type PressableProps } from 'react-native';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { colors, borderRadius, spacing } from '@/constants/tokens';
import { NativeBadge } from './native-badge';

interface LiquidGlassButtonProps extends Omit<PressableProps, 'children'> {
  /** Button label text */
  children: string;
  /** Optional custom styles */
  style?: ViewStyle;
  /** Button variant */
  variant?: 'primary' | 'secondary';
}

export function LiquidGlassButton({
  children,
  style,
  variant = 'primary',
  ...props
}: LiquidGlassButtonProps) {
  const colorScheme = useColorScheme() ?? 'light';
  const theme = colors[colorScheme];

  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: theme.nativePlaceholder },
        pressed && styles.pressed,
        style,
      ]}
      {...props}
    >
      <Text style={[styles.text, { color: theme.text }]}>{children}</Text>
      <NativeBadge />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: borderRadius.lg,
    paddingVertical: spacing['3'],
    paddingHorizontal: spacing['4'],
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    minHeight: 48,
  },
  pressed: {
    opacity: 0.8,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
});
