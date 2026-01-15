import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useColorScheme } from '@/hooks/use-color-scheme';

export default function SheetFullscreenScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme();

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
        contentInsetAdjustmentBehavior="automatic"
      >
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: textColor }]}>Full Screen Preset</Text>
          <Text style={[styles.description, { color: secondaryTextColor }]}>
            This sheet opens at 100% height with no grabber. It has a dismiss button on the left - this is the only way to close it (swipe down is disabled).
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: textColor }]}>Configuration</Text>
          <View style={[styles.card, { backgroundColor: cardBackground }]}>
            <InfoRow label="Header Left" value="Dismiss (X)" textColor={textColor} secondaryColor={secondaryTextColor} />
            <InfoRow label="Detents" value="100% only" textColor={textColor} secondaryColor={secondaryTextColor} />
            <InfoRow label="Grabber" value="Hidden" textColor={textColor} secondaryColor={secondaryTextColor} />
          </View>
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
  container: { flex: 1 },
  scrollView: { flex: 1 },
  scrollContent: { padding: 20, paddingBottom: 40 },
  section: { marginBottom: 24, gap: 12 },
  sectionTitle: { fontSize: 16, fontWeight: '600', lineHeight: 24 },
  description: { fontSize: 14, lineHeight: 22 },
  card: { borderRadius: 12, padding: 16, gap: 12 },
  infoRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  infoLabel: { fontSize: 14 },
  infoValue: { fontSize: 14, fontWeight: '500' },
});
