/**
 * LiquidGlassButton - Android native implementation
 * Uses @expo/ui Button with native Material/Jetpack styling.
 */

import { Button } from '@expo/ui/jetpack-compose';
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
        variant={variant === 'primary' ? 'default' : 'bordered'}
      >
        {children}
      </Button>
    </View>
  );
}
