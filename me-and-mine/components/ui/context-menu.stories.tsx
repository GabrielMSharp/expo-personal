import type { Meta, StoryObj } from '@storybook/react';
import { View, StyleSheet } from 'react-native';
import { ContextMenu } from './context-menu';
import { ThemedText } from '../themed-text';
import { ThemedView } from '../themed-view';

// Simple action logger for stories
const action = (name: string) => () => {
  console.log(`Action: ${name}`);
};

const meta: Meta<typeof ContextMenu> = {
  title: 'Components/ContextMenu',
  component: ContextMenu,
  parameters: {
    notes: 'This component uses native context menus on iOS/Android. On web, long-press shows a tooltip. Try long-pressing the content!',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleItems = [
  { key: 'copy', title: 'Copy', icon: 'doc.on.doc' },
  { key: 'share', title: 'Share', icon: 'square.and.arrow.up' },
  { key: 'delete', title: 'Delete', icon: 'trash', destructive: true },
];

export const Default: Story = {
  render: () => (
    <ContextMenu items={sampleItems} onSelect={action('menu-select')}>
      <ThemedView style={styles.card}>
        <ThemedText type="defaultSemiBold">Long press me</ThemedText>
        <ThemedText>Hold to see context menu options</ThemedText>
      </ThemedView>
    </ContextMenu>
  ),
};

export const OnImage: Story = {
  render: () => (
    <ContextMenu
      items={[
        { key: 'save', title: 'Save Image', icon: 'square.and.arrow.down' },
        { key: 'copy', title: 'Copy Image', icon: 'doc.on.doc' },
        { key: 'share', title: 'Share', icon: 'square.and.arrow.up' },
      ]}
      onSelect={action('image-menu-select')}
    >
      <View style={styles.imagePlaceholder}>
        <ThemedText style={{ color: '#fff' }}>📷 Image</ThemedText>
        <ThemedText style={{ color: '#fff', fontSize: 12 }}>Long press for options</ThemedText>
      </View>
    </ContextMenu>
  ),
};

export const ListItem: Story = {
  render: () => (
    <View style={{ gap: 1 }}>
      {['Item 1', 'Item 2', 'Item 3'].map((item) => (
        <ContextMenu
          key={item}
          items={sampleItems}
          onSelect={(key) => action(`${item}-${key}`)()}
        >
          <ThemedView style={styles.listItem}>
            <ThemedText>{item}</ThemedText>
          </ThemedView>
        </ContextMenu>
      ))}
    </View>
  ),
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    gap: 4,
  },
  imagePlaceholder: {
    width: 200,
    height: 150,
    backgroundColor: '#3498db',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  listItem: {
    padding: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(0,0,0,0.1)',
  },
});
