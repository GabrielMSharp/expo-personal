/**
 * BlurView - iOS native implementation
 * Uses expo-blur for real native blur effects.
 */

import { BlurView as ExpoBlurView } from 'expo-blur';
import { StyleSheet, type ViewStyle, type ViewProps } from 'react-native';
import { useColorScheme } from '@/hooks/use-color-scheme';

export type BlurIntensity = 'light' | 'default' | 'dark' | 'prominent';

interface BlurViewProps extends ViewProps {
  /** Blur intensity */
  intensity?: BlurIntensity;
  /** Custom styles */
  style?: ViewStyle;
}

const tintMap: Record<BlurIntensity, 'light' | 'dark' | 'default' | 'prominent'> = {
  light: 'light',
  default: 'default',
  dark: 'dark',
  prominent: 'prominent',
};

export function BlurView({ intensity = 'default', style, children, ...props }: BlurViewProps) {
  const colorScheme = useColorScheme() ?? 'light';

  return (
    <ExpoBlurView
      intensity={80}
      tint={tintMap[intensity]}
      style={[styles.container, style]}
      {...props}
    >
      {children}
    </ExpoBlurView>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
});
