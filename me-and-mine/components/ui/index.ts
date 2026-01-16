/**
 * UI Components Index
 * Platform-specific primitives with automatic web fallbacks.
 */

// Cross-platform components (same on all platforms)
export { Collapsible } from './collapsible';
export { IconSymbol } from './icon-symbol';

// Platform-specific components (auto-selected by Metro bundler)
export { LiquidGlassButton } from './liquid-glass-button';
export { ContextMenu, type ContextMenuItem } from './context-menu';
export { BlurView, type BlurIntensity } from './blur-view';
export { triggerHaptic, useHaptics, type HapticStyle } from './haptic-feedback';

// Utility components
export { NativeBadge } from './native-badge';
