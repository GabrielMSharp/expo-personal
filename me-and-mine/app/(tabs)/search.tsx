import { StyleSheet, TextInput, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function SearchScreen() {
  return (
    <ThemedView style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        placeholderTextColor="#999"
      />
      <View style={styles.content}>
        <ThemedText type="subtitle">Search Results</ThemedText>
        <ThemedText>Start typing to search...</ThemedText>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 60,
  },
  searchInput: {
    height: 44,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 20,
  },
  content: {
    flex: 1,
    gap: 8,
  },
});
