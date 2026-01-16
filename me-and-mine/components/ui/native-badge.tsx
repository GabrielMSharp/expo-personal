/**
 * NativeBadge - A small badge indicating native-only UI
 * Used by web fallback components to indicate that the full UI requires device preview.
 */

import { View, Text, StyleSheet } from 'react-native';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { colors } from '@/constants/tokens';

interface NativeBadgeProps {
  /** Optional label text, defaults to "Native UI" */
  label?: string;
}

export function NativeBadge({ label = 'Native UI' }: NativeBadgeProps) {
  const colorScheme = useColorScheme() ?? 'light';
  const theme = colors[colorScheme];

  return (
    <View style={[styles.badge, { backgroundColor: theme.nativeBadgeBackground }]}>
      <Text style={[styles.text, { color: theme.nativeBadgeText }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    position: 'absolute',
    top: 4,
    right: 4,
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  text: {
    fontSize: 9,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
});
