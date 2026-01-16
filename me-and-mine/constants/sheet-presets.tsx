import type { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { router } from 'expo-router';
import { Platform, Pressable, StyleSheet } from 'react-native';

import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';

// Types for our sheet configurations
type SheetDetent = number;
type SheetPresetName = 'default' | 'dismissOnly' | 'confirmDismiss' | 'fullScreen';

interface SheetPreset extends NativeStackNavigationOptions {
  presentation?: 'formSheet' | 'modal' | 'card';
  sheetAllowedDetents?: SheetDetent[];
  sheetGrabberVisible?: boolean;
  sheetCornerRadius?: number;
  sheetExpandsWhenScrolledToEdge?: boolean;
  sheetLargestUndimmedDetentIndex?: number;
}

// Header button components
interface HeaderButtonProps {
  onPress: () => void;
  tintColor?: string;
}

function DismissButton({ onPress, tintColor }: HeaderButtonProps) {
  const color = tintColor ?? Colors.light.tint;
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.headerButton,
        pressed && styles.headerButtonPressed,
      ]}
      hitSlop={8}
    >
      <IconSymbol
        name="xmark"
        // Let iOS 26 auto-size the icon in buttons
        {...(Platform.OS !== 'ios' && { size: 22 })}
        color={color}
        weight="semibold"
      />
    </Pressable>
  );
}

function ConfirmButton({ onPress, tintColor }: HeaderButtonProps) {
  const color = tintColor ?? Colors.light.tint;
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.headerButton,
        pressed && styles.headerButtonPressed,
      ]}
      hitSlop={8}
    >
      <IconSymbol
        name="checkmark"
        // Let iOS 26 auto-size the icon in buttons
        {...(Platform.OS !== 'ios' && { size: 22 })}
        color={color}
        weight="semibold"
      />
    </Pressable>
  );
}

// Platform-specific sheet options
const iosSheetOptions: Partial<SheetPreset> = {
  presentation: 'formSheet',
  headerTransparent: true, // Enables liquid glass effect
};

const androidSheetOptions: Partial<SheetPreset> = {
  presentation: 'modal',
  animation: 'slide_from_bottom', // Mimics iOS sheet behavior
};

const platformSheetOptions = Platform.OS === 'ios' ? iosSheetOptions : androidSheetOptions;

// Base sheet configuration
// Note: On Android, formSheet/sheetAllowedDetents have limited support
// Sheets may display as full-screen modals
const baseSheetOptions: SheetPreset = {
  sheetGrabberVisible: true,
  sheetCornerRadius: 32,
  sheetExpandsWhenScrolledToEdge: true,
  ...platformSheetOptions
};

// Sheet presets
export const sheetPresets = {
  /**
   * Default sheet with standard detents, no header buttons
   */
  default: {
    ...baseSheetOptions,
    sheetAllowedDetents: [0.25, 0.5, 1.0],
    headerShown: true,
  } as SheetPreset,

  /**
   * Sheet with dismiss button (X) on the left
   */
  dismissOnly: {
    ...baseSheetOptions,
    sheetAllowedDetents: [0.5, 1.0],
    headerShown: true,
    headerLeft: ({ tintColor }: { tintColor?: string }) => (
      <DismissButton onPress={() => router.back()} tintColor={tintColor} />
    ),
  } as SheetPreset,

  /**
   * Sheet with dismiss (X) on left and confirm (✓) on right
   */
  confirmDismiss: {
    ...baseSheetOptions,
    sheetAllowedDetents: [0.5, 1.0],
    headerShown: true,
    headerLeft: ({ tintColor }: { tintColor?: string }) => (
      <DismissButton onPress={() => router.back()} tintColor={tintColor} />
    ),
    headerRight: ({ tintColor }: { tintColor?: string }) => (
      <ConfirmButton
        onPress={() => {
          // Override this in your screen options
          console.log('Confirm pressed - override onConfirm');
          router.back();
        }}
        tintColor={tintColor}
      />
    ),
  } as SheetPreset,

  /**
   * Full screen sheet (100% detent only)
   */
  fullScreen: {
    ...baseSheetOptions,
    sheetAllowedDetents: [1.0],
    sheetGrabberVisible: false,
    headerShown: true,
    headerLeft: ({ tintColor }: { tintColor?: string }) => (
      <DismissButton onPress={() => router.back()} tintColor={tintColor} />
    ),
  } as SheetPreset,
} satisfies Record<SheetPresetName, SheetPreset>;

/**
 * Helper to merge a preset with custom options
 * @param preset - The preset name or preset object
 * @param overrides - Custom options to merge
 */
export function createSheetOptions(
  preset: SheetPresetName | SheetPreset,
  overrides?: Partial<SheetPreset>
): SheetPreset {
  const basePreset = typeof preset === 'string' ? sheetPresets[preset] : preset;
  return {
    ...basePreset,
    ...overrides,
  };
}


const styles = StyleSheet.create({
  headerButton: {
    width: 36,
    height: 36,
    borderRadius: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerButtonPressed: {
    opacity: 0.6,
  },
});

// Re-export types
export type { SheetDetent, SheetPreset, SheetPresetName };

