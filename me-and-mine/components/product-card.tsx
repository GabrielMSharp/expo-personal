/**
 * ProductCard - A standard e-commerce product card component
 * Demonstrates the platform-specific primitive pattern with LiquidGlassButton and ContextMenu
 */

import { View, StyleSheet, Image } from 'react-native';
import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';
import { LiquidGlassButton } from './ui/liquid-glass-button';
import { ContextMenu, type ContextMenuItem } from './ui/context-menu';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { colors, borderRadius, spacing, shadows } from '@/constants/tokens';

interface ProductCardProps {
  /** Product title */
  title: string;
  /** Product price */
  price: number;
  /** Original price (for sale items) */
  originalPrice?: number;
  /** Product image URL */
  image?: string;
  /** Called when add to cart is pressed */
  onAddToCart?: () => void;
  /** Called when a context menu item is selected */
  onContextMenuSelect?: (key: string) => void;
}

const defaultContextMenuItems: ContextMenuItem[] = [
  { key: 'save', title: 'Save for Later', icon: 'bookmark' },
  { key: 'share', title: 'Share Product', icon: 'square.and.arrow.up' },
  { key: 'compare', title: 'Add to Compare', icon: 'arrow.left.arrow.right' },
  { key: 'hide', title: 'Hide This Item', icon: 'eye.slash', destructive: true },
];

export function ProductCard({
  title,
  price,
  originalPrice,
  image,
  onAddToCart,
  onContextMenuSelect,
}: ProductCardProps) {
  const colorScheme = useColorScheme() ?? 'light';
  const theme = colors[colorScheme];
  const isOnSale = originalPrice && originalPrice > price;

  return (
    <ThemedView style={[styles.card, shadows.md]}>
      {/* Product Image with Context Menu */}
      <ContextMenu
        items={defaultContextMenuItems}
        onSelect={onContextMenuSelect}
      >
        <View style={[styles.imageContainer, { backgroundColor: theme.backgroundTertiary }]}>
          {image ? (
            <Image source={{ uri: image }} style={styles.image} resizeMode="cover" />
          ) : (
            <View style={styles.placeholderImage}>
              <ThemedText style={styles.placeholderEmoji}>📦</ThemedText>
              <ThemedText style={[styles.placeholderText, { color: theme.textTertiary }]}>
                Product Image
              </ThemedText>
              <ThemedText style={[styles.longPressHint, { color: theme.textTertiary }]}>
                Long press for options
              </ThemedText>
            </View>
          )}
          {isOnSale && (
            <View style={[styles.saleBadge, { backgroundColor: theme.error }]}>
              <ThemedText style={styles.saleBadgeText}>SALE</ThemedText>
            </View>
          )}
        </View>
      </ContextMenu>

      {/* Product Info */}
      <View style={styles.content}>
        <ThemedText type="defaultSemiBold" numberOfLines={2} style={styles.title}>
          {title}
        </ThemedText>

        <View style={styles.priceRow}>
          <ThemedText type="subtitle" style={{ color: theme.tint }}>
            ${price.toFixed(2)}
          </ThemedText>
          {isOnSale && (
            <ThemedText style={[styles.originalPrice, { color: theme.textTertiary }]}>
              ${originalPrice.toFixed(2)}
            </ThemedText>
          )}
        </View>

        {/* Native Button - shows fallback on web */}
        <LiquidGlassButton onPress={onAddToCart} style={styles.button}>
          Add to Cart
        </LiquidGlassButton>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: borderRadius.xl,
    overflow: 'hidden',
    maxWidth: 280,
  },
  imageContainer: {
    aspectRatio: 1,
    width: '100%',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  placeholderImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing['2'],
  },
  placeholderEmoji: {
    fontSize: 48,
  },
  placeholderText: {
    fontSize: 14,
  },
  longPressHint: {
    fontSize: 11,
    marginTop: spacing['1'],
    opacity: 0.7,
  },
  saleBadge: {
    position: 'absolute',
    top: spacing['3'],
    left: spacing['3'],
    paddingHorizontal: spacing['2'],
    paddingVertical: spacing['1'],
    borderRadius: borderRadius.sm,
  },
  saleBadgeText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  content: {
    padding: spacing['4'],
    gap: spacing['3'],
  },
  title: {
    fontSize: 16,
    lineHeight: 22,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing['2'],
  },
  originalPrice: {
    fontSize: 14,
    textDecorationLine: 'line-through',
  },
  button: {
    marginTop: spacing['1'],
  },
});
