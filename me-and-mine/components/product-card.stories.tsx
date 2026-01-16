import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';
import { ProductCard } from './product-card';

const meta: Meta<typeof ProductCard> = {
  title: 'Components/ProductCard',
  component: ProductCard,
  parameters: {
    notes: 'Product card with LiquidGlassButton and ContextMenu. The button shows native SwiftUI/Jetpack styling on device. Long-press the image to see context menu options (native menu on device, tooltip on web).',
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Product name',
    },
    price: {
      control: 'number',
      description: 'Current price',
    },
    originalPrice: {
      control: 'number',
      description: 'Original price (shows sale badge if higher than price)',
    },
    image: {
      control: 'text',
      description: 'Product image URL',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Action handlers for stories
const handleAddToCart = () => console.log('Add to cart pressed');
const handleContextMenu = (key: string) => console.log(`Context menu: ${key}`);

export const Default: Story = {
  args: {
    title: 'Wireless Bluetooth Headphones',
    price: 149.99,
    onAddToCart: handleAddToCart,
    onContextMenuSelect: handleContextMenu,
  },
};

export const WithImage: Story = {
  args: {
    title: 'Premium Wireless Earbuds',
    price: 199.99,
    image: 'https://picsum.photos/seed/earbuds/400/400',
    onAddToCart: handleAddToCart,
    onContextMenuSelect: handleContextMenu,
  },
};

export const OnSale: Story = {
  args: {
    title: 'Smart Watch Series 5',
    price: 299.99,
    originalPrice: 399.99,
    onAddToCart: handleAddToCart,
    onContextMenuSelect: handleContextMenu,
  },
};

export const OnSaleWithImage: Story = {
  args: {
    title: 'Portable Bluetooth Speaker',
    price: 79.99,
    originalPrice: 129.99,
    image: 'https://picsum.photos/seed/speaker/400/400',
    onAddToCart: handleAddToCart,
    onContextMenuSelect: handleContextMenu,
  },
};

export const LongTitle: Story = {
  args: {
    title: 'Ultra Premium Noise Cancelling Over-Ear Headphones with Extended Battery Life',
    price: 349.99,
    onAddToCart: handleAddToCart,
    onContextMenuSelect: handleContextMenu,
  },
};

export const MultipleCards: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 16 }}>
      <ProductCard
        title="Wireless Earbuds"
        price={99.99}
        onAddToCart={() => console.log('Card 1 - Add to cart')}
        onContextMenuSelect={(key) => console.log(`Card 1 - Context: ${key}`)}
      />
      <ProductCard
        title="Smart Watch"
        price={249.99}
        originalPrice={299.99}
        onAddToCart={() => console.log('Card 2 - Add to cart')}
        onContextMenuSelect={(key) => console.log(`Card 2 - Context: ${key}`)}
      />
    </View>
  ),
};
