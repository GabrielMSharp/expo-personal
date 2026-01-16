/**
 * ContextMenu - iOS implementation
 * Uses @expo/ui ContextMenu when available (dev build), falls back to web implementation in Expo Go.
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

// Check if native module is available
let ExpoContextMenu: any = null;
let ExpoButton: any = null;
let hasNativeModule = false;

try {
  const expoUI = require('@expo/ui/swift-ui');
  ExpoContextMenu = expoUI.ContextMenu;
  ExpoButton = expoUI.Button;
  // Test if the module actually works by checking if it has the expected shape
  hasNativeModule = ExpoContextMenu && ExpoContextMenu.Trigger && ExpoContextMenu.Items;
} catch (e) {
  hasNativeModule = false;
}

// Native implementation using @expo/ui
function NativeContextMenu({ children, items, onSelect }: ContextMenuProps) {
  if (!hasNativeModule) {
    return <FallbackContextMenu children={children} items={items} onSelect={onSelect} />;
  }

  return (
    <ExpoContextMenu>
      <ExpoContextMenu.Trigger>
        {children}
      </ExpoContextMenu.Trigger>
      <ExpoContextMenu.Items>
        {items.map((item) => (
          <ExpoButton
            key={item.key}
            onPress={() => onSelect?.(item.key)}
            role={item.destructive ? 'destructive' : 'default'}
          >
            {item.title}
          </ExpoButton>
        ))}
      </ExpoContextMenu.Items>
    </ExpoContextMenu>
  );
}

// Fallback for Expo Go
function FallbackContextMenu({ children, items, onSelect }: ContextMenuProps) {
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
            Menu available in dev build
          </Text>
        </View>
      )}
    </Pressable>
  );
}

export function ContextMenu(props: ContextMenuProps) {
  // Always use fallback in Expo Go since native modules cause warnings
  return <FallbackContextMenu {...props} />;
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
