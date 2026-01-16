/**
 * HapticFeedback - Android native implementation
 * Uses expo-haptics for real haptic feedback.
 */

import * as Haptics from 'expo-haptics';

export type HapticStyle = 'light' | 'medium' | 'heavy' | 'selection' | 'success' | 'warning' | 'error';

const impactStyleMap: Record<'light' | 'medium' | 'heavy', Haptics.ImpactFeedbackStyle> = {
  light: Haptics.ImpactFeedbackStyle.Light,
  medium: Haptics.ImpactFeedbackStyle.Medium,
  heavy: Haptics.ImpactFeedbackStyle.Heavy,
};

const notificationTypeMap: Record<'success' | 'warning' | 'error', Haptics.NotificationFeedbackType> = {
  success: Haptics.NotificationFeedbackType.Success,
  warning: Haptics.NotificationFeedbackType.Warning,
  error: Haptics.NotificationFeedbackType.Error,
};

/**
 * Trigger haptic feedback
 */
export function triggerHaptic(style: HapticStyle = 'selection'): void {
  if (style === 'selection') {
    Haptics.selectionAsync();
  } else if (style in impactStyleMap) {
    Haptics.impactAsync(impactStyleMap[style as keyof typeof impactStyleMap]);
  } else if (style in notificationTypeMap) {
    Haptics.notificationAsync(notificationTypeMap[style as keyof typeof notificationTypeMap]);
  }
}

/**
 * Hook for haptic feedback
 */
export function useHaptics() {
  return {
    trigger: triggerHaptic,
    light: () => triggerHaptic('light'),
    medium: () => triggerHaptic('medium'),
    heavy: () => triggerHaptic('heavy'),
    selection: () => triggerHaptic('selection'),
    success: () => triggerHaptic('success'),
    warning: () => triggerHaptic('warning'),
    error: () => triggerHaptic('error'),
  };
}
