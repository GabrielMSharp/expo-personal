import type { Meta, StoryObj } from '@storybook/react';
import { View, Alert } from 'react-native';
import { LiquidGlassButton } from './liquid-glass-button';
import { ThemedText } from '../themed-text';

// Simple action logger for stories
const action = (name: string) => () => {
  console.log(`Action: ${name}`);
};

const meta: Meta<typeof LiquidGlassButton> = {
  title: 'Components/LiquidGlassButton',
  component: LiquidGlassButton,
  parameters: {
    notes: 'This component uses native SwiftUI/Jetpack styling on iOS/Android. On web, a placeholder with "Native UI" badge is shown.',
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'Button label',
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: 'Button style variant',
    },
    onPress: {
      action: 'pressed',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Add to Cart',
    variant: 'primary',
    onPress: action('button-pressed'),
  },
};

export const Secondary: Story = {
  args: {
    children: 'Learn More',
    variant: 'secondary',
    onPress: action('button-pressed'),
  },
};

export const InContext: Story = {
  render: () => (
    <View style={{ gap: 16, padding: 16 }}>
      <ThemedText type="subtitle">Product Name</ThemedText>
      <ThemedText>$99.99</ThemedText>
      <LiquidGlassButton onPress={action('add-to-cart')}>
        Add to Cart
      </LiquidGlassButton>
    </View>
  ),
};

export const MultipleButtons: Story = {
  render: () => (
    <View style={{ gap: 12 }}>
      <LiquidGlassButton onPress={action('primary')}>
        Primary Action
      </LiquidGlassButton>
      <LiquidGlassButton variant="secondary" onPress={action('secondary')}>
        Secondary Action
      </LiquidGlassButton>
    </View>
  ),
};
