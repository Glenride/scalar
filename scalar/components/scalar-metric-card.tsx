import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { AppColorPalette, Fonts } from '@/constants/theme';

type ScalarMetricCardProps = {
  current: string;
  delta: string;
  label: string;
  note: string;
  palette: AppColorPalette;
};

export function ScalarMetricCard({ current, delta, label, note, palette }: ScalarMetricCardProps) {
  return (
    <View style={[styles.container, { backgroundColor: palette.surface, borderColor: palette.border }]}>
      <View style={styles.header}>
        <ThemedText style={[styles.label, { color: palette.muted, fontFamily: Fonts.mono }]}>{label}</ThemedText>
        <ThemedText style={[styles.delta, { color: palette.success, fontFamily: Fonts.mono }]}>{delta}</ThemedText>
      </View>
      <ThemedText style={[styles.value, { color: palette.text, fontFamily: Fonts.mono }]}>{current}</ThemedText>
      <ThemedText style={[styles.note, { color: palette.muted }]}>{note}</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 18,
    padding: 16,
    gap: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  label: {
    fontSize: 12,
    letterSpacing: 0.9,
  },
  delta: {
    fontSize: 12,
    letterSpacing: 0.9,
  },
  value: {
    fontSize: 32,
    lineHeight: 36,
    fontWeight: '700',
  },
  note: {
    fontSize: 15,
    lineHeight: 22,
  },
});
