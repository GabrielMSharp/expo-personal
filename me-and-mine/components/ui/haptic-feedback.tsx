/**
 * HapticFeedback - Web fallback
 * On web, haptics are a no-op (silent).
 * On iOS/Android, the platform-specific files trigger real haptic feedback.
 */

export type HapticStyle = 'light' | 'medium' | 'heavy' | 'selection' | 'success' | 'warning' | 'error';

/**
 * Trigger haptic feedback (no-op on web)
 */
export function triggerHaptic(style: HapticStyle = 'selection'): void {
  // No-op on web - haptics not available
}

/**
 * Hook for haptic feedback (no-op on web)
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
