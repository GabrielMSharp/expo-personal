/**
 * Spacing tokens for the design system.
 * Consistent spacing scale based on 4px increments.
 */

export const spacing = {
  /** 0px */
  none: 0,
  /** 2px */
  '0.5': 2,
  /** 4px */
  '1': 4,
  /** 6px */
  '1.5': 6,
  /** 8px */
  '2': 8,
  /** 10px */
  '2.5': 10,
  /** 12px */
  '3': 12,
  /** 14px */
  '3.5': 14,
  /** 16px */
  '4': 16,
  /** 20px */
  '5': 20,
  /** 24px */
  '6': 24,
  /** 28px */
  '7': 28,
  /** 32px */
  '8': 32,
  /** 36px */
  '9': 36,
  /** 40px */
  '10': 40,
  /** 48px */
  '12': 48,
  /** 56px */
  '14': 56,
  /** 64px */
  '16': 64,
  /** 80px */
  '20': 80,
  /** 96px */
  '24': 96,
};

export const borderRadius = {
  none: 0,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  '2xl': 24,
  full: 9999,
};

export const shadows = {
  none: {
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  xl: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 8,
  },
};
