/**
 * ContextMenu - iOS implementation
 * Falls back to React Native long-press hint.
 * Native @expo/ui ContextMenu can be enabled in a development build when stable.
 */

import { useState, type ReactNode } from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { colors, borderRadius, spacing, shadows } from '@/constants/tokens';

export interface ContextMenuItem {
  key: string;
  title: string;
  icon?: string;
  destructive?: boolean;
}

interface ContextMenuProps {
  /** Content to wrap with context menu */
  children: ReactNode;
  /** Menu items to display */
  items: ContextMenuItem[];
  /** Called when a menu item is selected */
  onSelect?: (key: string) => void;
}

export function ContextMenu({ children, items, onSelect }: ContextMenuProps) {
  const [showHint, setShowHint] = useState(false);
  const colorScheme = useColorScheme() ?? 'light';
  const theme = colors[colorScheme];

  return (
    <Pressable
      onLongPress={() => setShowHint(true)}
      onPressOut={() => setShowHint(false)}
      delayLongPress={500}
      style={styles.container}
    >
      {children}
      {showHint && (
        <View
          style={[
            styles.tooltip,
            shadows.md,
            {
              backgroundColor: theme.backgroundSecondary,
              borderColor: theme.border,
            },
          ]}
        >
          <Text style={[styles.tooltipText, { color: theme.textSecondary }]}>
            Native menu available
          </Text>
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  tooltip: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    marginTop: spacing['2'],
    paddingHorizontal: spacing['3'],
    paddingVertical: spacing['2'],
    borderRadius: borderRadius.md,
    borderWidth: 1,
    alignItems: 'center',
    zIndex: 1000,
  },
  tooltipText: {
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
  },
});
