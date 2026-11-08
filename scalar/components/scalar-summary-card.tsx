import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { AppColorPalette } from '@/constants/theme';

type ScalarSummaryCardProps = {
  headline: string;
  palette: AppColorPalette;
  supportingCopy: string;
};

export function ScalarSummaryCard({ headline, palette, supportingCopy }: ScalarSummaryCardProps) {
  return (
    <View style={[styles.container, { backgroundColor: palette.surface, borderColor: palette.border }]}>
      <ThemedText style={[styles.headline, { color: palette.text }]}>{headline}</ThemedText>
      <ThemedText style={[styles.copy, { color: palette.muted }]}>{supportingCopy}</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 18,
    padding: 16,
    gap: 6,
  },
  headline: {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: '600',
  },
  copy: {
    fontSize: 15,
    lineHeight: 22,
  },
});
