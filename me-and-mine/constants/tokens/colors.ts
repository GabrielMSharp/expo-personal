/**
 * Color tokens for the design system.
 * Includes both the raw palette and semantic color mappings for light/dark themes.
 */

export const palette = {
  // Primary blues
  blue: {
    50: '#e6f4f7',
    100: '#b3dde6',
    200: '#80c6d5',
    300: '#4dafc4',
    400: '#2699b3',
    500: '#0a7ea4',
    600: '#086f91',
    700: '#065f7d',
    800: '#054f69',
    900: '#033f55',
  },
  // Neutral grays
  gray: {
    50: '#f8f9fa',
    100: '#f1f3f5',
    200: '#e9ecef',
    300: '#dee2e6',
    400: '#ced4da',
    500: '#687076',
    600: '#495057',
    700: '#343a40',
    800: '#212529',
    900: '#151718',
  },
  // Semantic colors
  red: {
    500: '#dc3545',
    600: '#c82333',
  },
  green: {
    500: '#28a745',
    600: '#218838',
  },
  yellow: {
    500: '#ffc107',
    600: '#e0a800',
  },
  // Pure colors
  white: '#ffffff',
  black: '#000000',
};

export const colors = {
  light: {
    text: '#11181C',
    textSecondary: '#687076',
    textTertiary: '#9BA1A6',
    background: '#ffffff',
    backgroundSecondary: '#f8f9fa',
    backgroundTertiary: '#f1f3f5',
    tint: palette.blue[500],
    tintPressed: palette.blue[600],
    icon: '#687076',
    iconSelected: palette.blue[500],
    border: '#dee2e6',
    borderFocused: palette.blue[500],
    // Tab bar
    tabIconDefault: '#687076',
    tabIconSelected: palette.blue[500],
    // Semantic
    success: palette.green[500],
    warning: palette.yellow[500],
    error: palette.red[500],
    // Native UI placeholder
    nativeBadgeBackground: 'rgba(0, 0, 0, 0.6)',
    nativeBadgeText: '#ffffff',
    nativePlaceholder: 'rgba(120, 120, 128, 0.12)',
  },
  dark: {
    text: '#ECEDEE',
    textSecondary: '#9BA1A6',
    textTertiary: '#687076',
    background: '#151718',
    backgroundSecondary: '#1c1e1f',
    backgroundTertiary: '#232526',
    tint: '#ffffff',
    tintPressed: '#e0e0e0',
    icon: '#9BA1A6',
    iconSelected: '#ffffff',
    border: '#343a40',
    borderFocused: '#ffffff',
    // Tab bar
    tabIconDefault: '#9BA1A6',
    tabIconSelected: '#ffffff',
    // Semantic
    success: palette.green[500],
    warning: palette.yellow[500],
    error: palette.red[500],
    // Native UI placeholder
    nativeBadgeBackground: 'rgba(255, 255, 255, 0.8)',
    nativeBadgeText: '#000000',
    nativePlaceholder: 'rgba(120, 120, 128, 0.24)',
  },
};
