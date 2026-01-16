/**
 * LiquidGlassButton - iOS native implementation
 * Uses @expo/ui Button with native SwiftUI styling.
 */

import { Button } from '@expo/ui/swift-ui';
import { type ViewStyle, View } from 'react-native';

interface LiquidGlassButtonProps {
  /** Button label text */
  children: string;
  /** Press handler */
  onPress?: () => void;
  /** Optional custom styles */
  style?: ViewStyle;
  /** Button variant */
  variant?: 'primary' | 'secondary';
}

export function LiquidGlassButton({
  children,
  onPress,
  style,
  variant = 'primary',
}: LiquidGlassButtonProps) {
  return (
    <View style={style}>
      <Button
        onPress={onPress}
        variant={variant === 'primary' ? 'glass' : 'bordered'}
      >
        {children}
      </Button>
    </View>
  );
}
