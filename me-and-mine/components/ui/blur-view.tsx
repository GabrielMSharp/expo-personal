/**
 * BlurView - Web fallback
 * On web, renders a semi-transparent overlay to approximate blur effect.
 * On iOS/Android, the platform-specific files render real native blur.
 */

import { View, StyleSheet, type ViewStyle, type ViewProps } from 'react-native';
import { useColorScheme } from '@/hooks/use-color-scheme';

export type BlurIntensity = 'light' | 'default' | 'dark' | 'prominent';

interface BlurViewProps extends ViewProps {
  /** Blur intensity */
  intensity?: BlurIntensity;
  /** Custom styles */
  style?: ViewStyle;
}

const intensityOpacity: Record<BlurIntensity, number> = {
  light: 0.7,
  default: 0.8,
  dark: 0.85,
  prominent: 0.9,
};

export function BlurView({ intensity = 'default', style, children, ...props }: BlurViewProps) {
  const colorScheme = useColorScheme() ?? 'light';
  const baseColor = colorScheme === 'dark' ? '0, 0, 0' : '255, 255, 255';
  const opacity = intensityOpacity[intensity];

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: `rgba(${baseColor}, ${opacity})` },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
});
