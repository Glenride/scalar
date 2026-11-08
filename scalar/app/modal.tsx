import { Link } from 'expo-router';
import { ScrollView, StyleSheet, View } from 'react-native';

import { ScalarProgressBar } from '@/components/scalar-progress-bar';
import { ThemedText } from '@/components/themed-text';
import { badgeTracks, changelog, metrics } from '@/constants/scalar';
import { Colors, Fonts } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function ModalScreen() {
  const colorScheme = useColorScheme() ?? 'dark';
  const palette = Colors[colorScheme];

  return (
    <ScrollView
      style={[styles.screen, { backgroundColor: palette.background }]}
      contentContainerStyle={styles.content}>
      <View style={[styles.heroCard, { backgroundColor: palette.surface, borderColor: palette.border }]}>
        <ThemedText style={[styles.eyebrow, { color: palette.accent, fontFamily: Fonts.mono }]}>SCALAR UPDATE</ThemedText>
        <ThemedText style={[styles.title, { color: palette.text }]}>{changelog.title}</ThemedText>
        <View style={styles.entryList}>
          {changelog.entries.map((entry) => (
            <View key={entry} style={styles.entryRow}>
              <View style={[styles.entryDot, { backgroundColor: palette.accent }]} />
              <ThemedText style={[styles.entryText, { color: palette.text }]}>{entry}</ThemedText>
            </View>
          ))}
        </View>
      </View>

      <View style={[styles.card, { backgroundColor: palette.surface, borderColor: palette.border }]}>
        <ThemedText style={[styles.sectionEyebrow, { color: palette.accent, fontFamily: Fonts.mono }]}>CURRENT METRICS</ThemedText>
        <View style={styles.metricList}>
          {metrics.map((metric) => (
            <View key={metric.id} style={styles.metricRow}>
              <ThemedText style={[styles.metricLabel, { color: palette.muted, fontFamily: Fonts.mono }]}>{metric.label}</ThemedText>
              <View style={styles.metricValueGroup}>
                <ThemedText style={[styles.metricValue, { color: palette.text, fontFamily: Fonts.mono }]}>{metric.current}</ThemedText>
                <ThemedText style={[styles.metricDelta, { color: palette.success, fontFamily: Fonts.mono }]}>{metric.delta}</ThemedText>
              </View>
            </View>
          ))}
        </View>
      </View>

      <View style={[styles.card, { backgroundColor: palette.surface, borderColor: palette.border }]}>
        <ThemedText style={[styles.sectionEyebrow, { color: palette.accent, fontFamily: Fonts.mono }]}>BADGE FILL</ThemedText>
        <View style={styles.badgeList}>
          {badgeTracks.map((badge) => (
            <View key={badge.id} style={styles.badgeItem}>
              <View style={styles.badgeHeader}>
                <ThemedText style={[styles.badgeTitle, { color: palette.text }]}>{badge.label}</ThemedText>
                <ThemedText style={[styles.badgeValue, { color: palette.accent, fontFamily: Fonts.mono }]}>
                  {Math.round(badge.progress * 100)}%
                </ThemedText>
              </View>
              <ScalarProgressBar palette={palette} progress={badge.progress} />
            </View>
          ))}
        </View>
      </View>

      <Link href="/" dismissTo style={styles.link}>
        <ThemedText style={[styles.linkText, { color: palette.accent, fontFamily: Fonts.mono }]}>RETURN TO DEPLOY</ThemedText>
      </Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 40,
    gap: 16,
  },
  heroCard: {
    borderWidth: 1,
    borderRadius: 24,
    padding: 20,
    gap: 14,
  },
  eyebrow: {
    fontSize: 12,
    letterSpacing: 1.4,
  },
  title: {
    fontSize: 30,
    lineHeight: 34,
    fontWeight: '700',
  },
  entryList: {
    gap: 10,
  },
  entryRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
  entryDot: {
    width: 8,
    height: 8,
    borderRadius: 999,
    marginTop: 8,
  },
  entryText: {
    flex: 1,
    fontSize: 15,
    lineHeight: 22,
  },
  card: {
    borderWidth: 1,
    borderRadius: 22,
    padding: 18,
    gap: 14,
  },
  sectionEyebrow: {
    fontSize: 12,
    letterSpacing: 1.2,
  },
  metricList: {
    gap: 12,
  },
  metricRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
  },
  metricLabel: {
    flex: 1,
    fontSize: 12,
    letterSpacing: 0.8,
  },
  metricValueGroup: {
    alignItems: 'flex-end',
    gap: 4,
  },
  metricValue: {
    fontSize: 16,
  },
  metricDelta: {
    fontSize: 12,
  },
  badgeList: {
    gap: 16,
  },
  badgeItem: {
    gap: 8,
  },
  badgeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
  },
  badgeTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  badgeValue: {
    fontSize: 12,
    letterSpacing: 0.8,
  },
  link: {
    alignSelf: 'flex-start',
    paddingVertical: 8,
  },
  linkText: {
    fontSize: 12,
    letterSpacing: 1.1,
    fontWeight: '700',
  },
});
