import { Link, useRouter } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function BottomSheetScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  // Use explicit colors for sheet content (avoid theme detection issues in sheet context)
  const isDark = colorScheme === 'dark';
  const textColor = isDark ? '#ffffff' : '#000000';
  const secondaryTextColor = isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)';
  const cardBackground = isDark ? '#2c2c2e' : '#f2f2f7';
  const sheetBackground = isDark ? '#1c1c1e' : '#ffffff';

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: sheetBackground }]} edges={['bottom']}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        contentInsetAdjustmentBehavior="automatic"
      >
        {/* Info Section */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: textColor }]}>Sheet Configuration</Text>
          <View style={[styles.card, { backgroundColor: cardBackground }]}>
            <InfoRow label="Presentation" value="formSheet" textColor={textColor} secondaryColor={secondaryTextColor} />
            <InfoRow label="Detents" value="25%, 50%, 100%" textColor={textColor} secondaryColor={secondaryTextColor} />
            <InfoRow label="Corner Radius" value="24px" textColor={textColor} secondaryColor={secondaryTextColor} />
            <InfoRow label="Grabber Visible" value="true" textColor={textColor} secondaryColor={secondaryTextColor} />
            <InfoRow label="Expands on Scroll" value="true" textColor={textColor} secondaryColor={secondaryTextColor} />
            <InfoRow label="Undimmed Detent" value="0 (25%)" textColor={textColor} secondaryColor={secondaryTextColor} />
          </View>
        </View>

        {/* Actions Section */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: textColor }]}>Actions</Text>
          <View style={styles.actions}>
            <Pressable
              style={[styles.button, { backgroundColor: colors.tint }]}
              onPress={() => router.back()}
            >
              <Text style={styles.buttonText}>Dismiss Sheet</Text>
            </Pressable>

            <Link href="/" dismissTo asChild>
              <Pressable style={[styles.button, styles.secondaryButton, { borderColor: colors.tint }]}>
                <Text style={[styles.buttonText, { color: colors.tint }]}>
                  Go to Home
                </Text>
              </Pressable>
            </Link>
          </View>
        </View>

        {/* Tips Section */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: textColor }]}>Tips</Text>
          <View style={[styles.card, { backgroundColor: cardBackground }]}>
            <Text style={[styles.tip, { color: textColor }]}>
              • Drag the grabber to resize the sheet
            </Text>
            <Text style={[styles.tip, { color: textColor }]}>
              • Scroll content to expand to full height
            </Text>
            <Text style={[styles.tip, { color: textColor }]}>
              • Swipe down to dismiss
            </Text>
            <Text style={[styles.tip, { color: textColor }]}>
              • Background stays interactive at 25% detent
            </Text>
          </View>
        </View>

        {/* Extra content to demonstrate scrolling */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: textColor }]}>More Content</Text>
          <Text style={[styles.description, { color: secondaryTextColor }]}>
            This section demonstrates that the sheet can handle scrollable content.
            When you scroll to the edge, the sheet will expand to the next detent
            automatically if sheetExpandsWhenScrolledToEdge is enabled.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function InfoRow({ label, value, textColor, secondaryColor }: { label: string; value: string; textColor: string; secondaryColor: string }) {
  return (
    <View style={styles.infoRow}>
      <Text style={[styles.infoLabel, { color: secondaryColor }]}>{label}</Text>
      <Text style={[styles.infoValue, { color: textColor }]}>{value}</Text>
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
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
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
  },
});
