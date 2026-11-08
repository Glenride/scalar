import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { AppColorPalette, Fonts } from '@/constants/theme';

type ScalarPlanCardProps = {
  category: string;
  checklist: string[];
  focus: string;
  palette: AppColorPalette;
  title: string;
};

export function ScalarPlanCard({ category, checklist, focus, palette, title }: ScalarPlanCardProps) {
  return (
    <View style={[styles.container, { backgroundColor: palette.surface, borderColor: palette.border }]}>
      <View style={styles.header}>
        <View style={styles.headerCopy}>
          <ThemedText style={[styles.eyebrow, { color: palette.accent, fontFamily: Fonts.mono }]}>DEPLOYMENT PLAN</ThemedText>
          <ThemedText style={[styles.title, { color: palette.text }]}>{title}</ThemedText>
        </View>
        <View style={[styles.pill, { borderColor: palette.border, backgroundColor: palette.background }]}>
          <ThemedText style={[styles.pillText, { color: palette.muted, fontFamily: Fonts.mono }]}>{category}</ThemedText>
        </View>
      </View>
      <ThemedText style={[styles.copy, { color: palette.muted }]}>{focus}</ThemedText>
      <View style={styles.checklist}>
        {checklist.map((item) => (
          <View key={item} style={styles.checklistRow}>
            <View style={[styles.dot, { backgroundColor: palette.accent }]} />
            <ThemedText style={[styles.checklistText, { color: palette.text }]}>{item}</ThemedText>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 24,
    padding: 20,
    gap: 14,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 12,
  },
  headerCopy: {
    flex: 1,
    gap: 6,
  },
  eyebrow: {
    fontSize: 12,
    letterSpacing: 1.4,
  },
  title: {
    fontSize: 28,
    lineHeight: 32,
    fontWeight: '700',
  },
  pill: {
    borderRadius: 999,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  pillText: {
    fontSize: 11,
    letterSpacing: 0.8,
  },
  copy: {
    fontSize: 16,
    lineHeight: 24,
  },
  checklist: {
    gap: 10,
  },
  checklistRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 999,
    marginTop: 8,
  },
  checklistText: {
    flex: 1,
    fontSize: 15,
    lineHeight: 22,
  },
});
