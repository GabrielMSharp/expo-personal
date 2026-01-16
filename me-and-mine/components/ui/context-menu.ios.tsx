/**
 * ContextMenu - iOS native implementation
 * Uses @expo/ui ContextMenu with native SwiftUI styling.
 */

import { ContextMenu as ExpoContextMenu, Button } from '@expo/ui/swift-ui';
import { type ReactNode } from 'react';

export interface ContextMenuItem {
  key: string;
  title: string;
  icon?: string;
  destructive?: boolean;
}

interface ContextMenuProps {
  /** Content to wrap with context menu */
  children: ReactNode;
  /** Menu items to display */
  items: ContextMenuItem[];
  /** Called when a menu item is selected */
  onSelect?: (key: string) => void;
}

export function ContextMenu({ children, items, onSelect }: ContextMenuProps) {
  return (
    <ExpoContextMenu>
      <ExpoContextMenu.Trigger>
        {children}
      </ExpoContextMenu.Trigger>
      <ExpoContextMenu.Items>
        {items.map((item) => (
          <Button
            key={item.key}
            onPress={() => onSelect?.(item.key)}
            role={item.destructive ? 'destructive' : 'default'}
          >
            {item.title}
          </Button>
        ))}
      </ExpoContextMenu.Items>
    </ExpoContextMenu>
  );
}
