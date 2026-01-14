import { Link, useRouter } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function BottomSheetScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  // Use explicit background for sheet content
  const sheetBackgroundColor = colorScheme === 'dark' ? '#1c1c1e' : '#ffffff';

  return (
    <View style={[styles.container, { backgroundColor: sheetBackgroundColor }]}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Info Section */}
        <View style={styles.section}>
          <ThemedText type="defaultSemiBold">Sheet Configuration</ThemedText>
          <View style={[styles.card, { backgroundColor: colorScheme === 'dark' ? '#1c1c1e' : '#f2f2f7' }]}>
            <InfoRow label="Presentation" value="formSheet" />
            <InfoRow label="Detents" value="25%, 50%, 100%" />
            <InfoRow label="Corner Radius" value="24px" />
            <InfoRow label="Grabber Visible" value="true" />
            <InfoRow label="Expands on Scroll" value="true" />
            <InfoRow label="Undimmed Detent" value="0 (25%)" />
          </View>
        </View>

        {/* Actions Section */}
        <View style={styles.section}>
          <ThemedText type="defaultSemiBold">Actions</ThemedText>
          <View style={styles.actions}>
            <Pressable
              style={[styles.button, { backgroundColor: colors.tint }]}
              onPress={() => router.back()}
            >
              <ThemedText style={styles.buttonText}>Dismiss Sheet</ThemedText>
            </Pressable>

            <Link href="/" dismissTo asChild>
              <Pressable style={[styles.button, styles.secondaryButton, { borderColor: colors.tint }]}>
                <ThemedText style={[styles.buttonText, { color: colors.tint }]}>
                  Go to Home
                </ThemedText>
              </Pressable>
            </Link>
          </View>
        </View>

        {/* Tips Section */}
        <View style={styles.section}>
          <ThemedText type="defaultSemiBold">Tips</ThemedText>
          <View style={[styles.card, { backgroundColor: colorScheme === 'dark' ? '#1c1c1e' : '#f2f2f7' }]}>
            <ThemedText style={styles.tip}>
              • Drag the grabber to resize the sheet
            </ThemedText>
            <ThemedText style={styles.tip}>
              • Scroll content to expand to full height
            </ThemedText>
            <ThemedText style={styles.tip}>
              • Swipe down to dismiss
            </ThemedText>
            <ThemedText style={styles.tip}>
              • Background stays interactive at 25% detent
            </ThemedText>
          </View>
        </View>

        {/* Extra content to demonstrate scrolling */}
        <View style={styles.section}>
          <ThemedText type="defaultSemiBold">More Content</ThemedText>
          <ThemedText style={styles.description}>
            This section demonstrates that the sheet can handle scrollable content.
            When you scroll to the edge, the sheet will expand to the next detent
            automatically if `sheetExpandsWhenScrolledToEdge` is enabled.
          </ThemedText>
        </View>
      </ScrollView>
    </View>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.infoRow}>
      <ThemedText style={styles.infoLabel}>{label}</ThemedText>
      <ThemedText style={styles.infoValue}>{value}</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  section: {
    marginBottom: 24,
    gap: 12,
  },
  card: {
    borderRadius: 12,
    padding: 16,
    gap: 12,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoLabel: {
    opacity: 0.6,
    fontSize: 14,
  },
  infoValue: {
    fontSize: 14,
    fontWeight: '500',
  },
  actions: {
    gap: 12,
  },
  button: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: 'center',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  tip: {
    fontSize: 14,
    lineHeight: 22,
  },
  description: {
    fontSize: 14,
    lineHeight: 22,
    opacity: 0.8,
  },
});
