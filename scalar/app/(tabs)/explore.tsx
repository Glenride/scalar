import { ScrollView, StyleSheet, View } from 'react-native';

import { ScalarProgressBar } from '@/components/scalar-progress-bar';
import { ScalarSectionHeading } from '@/components/scalar-section-heading';
import { ThemedText } from '@/components/themed-text';
import { badgeTracks, lessons, magnitudeLabels, weeklyLoad } from '@/constants/scalar';
import { Colors, Fonts } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
export default function LibraryScreen() {
  const colorScheme = useColorScheme() ?? 'dark';
  const palette = Colors[colorScheme];
  const maxLoad = Math.max(...weeklyLoad.map((entry) => entry.value));

  return (
    <ScrollView
      style={[styles.screen, { backgroundColor: palette.background }]}
      contentContainerStyle={styles.content}>
      <View style={[styles.heroCard, { backgroundColor: palette.surface, borderColor: palette.border }]}>
        <ThemedText style={[styles.heroEyebrow, { color: palette.accent, fontFamily: Fonts.mono }]}>
          PHASE 1 // LIBRARY + BADGES
        </ThemedText>
        <ThemedText style={[styles.heroTitle, { color: palette.text }]}>Lesson library and progression artifacts.</ThemedText>
        <ThemedText style={[styles.heroCopy, { color: palette.muted }]}>
          The first SCALAR release organizes repeatable protocols, exposes invisible gains, and makes consistency visible
          through fractional badge fill.
        </ThemedText>
      </View>
      <ScalarSectionHeading eyebrow="LESSON LIBRARY" palette={palette} title="Protocols ready to deploy" />
      <View style={styles.stack}>
        {lessons.map((lesson) => (
          <View key={lesson.id} style={[styles.lessonCard, { backgroundColor: palette.surface, borderColor: palette.border }]}>
            <View style={styles.lessonHeader}>
              <View style={styles.lessonHeaderCopy}>
                <ThemedText style={[styles.lessonCategory, { color: palette.accent, fontFamily: Fonts.mono }]}>
                  {lesson.category}
                </ThemedText>
                <ThemedText style={[styles.lessonTitle, { color: palette.text }]}>{lesson.title}</ThemedText>
              </View>
              <View style={[styles.lessonPill, { backgroundColor: palette.background, borderColor: palette.border }]}>
                <ThemedText style={[styles.lessonPillText, { color: palette.muted, fontFamily: Fonts.mono }]}>
                  {lesson.duration}
                </ThemedText>
              </View>
            </View>
            <ThemedText style={[styles.lessonCopy, { color: palette.text }]}>{lesson.focus}</ThemedText>
            <ThemedText style={[styles.lessonMeta, { color: palette.muted }]}>{lesson.protocol}</ThemedText>
            <ThemedText style={[styles.lessonProgression, { color: palette.success }]}>{lesson.progression}</ThemedText>
            <View style={styles.tagRow}>
              <View style={[styles.tag, { backgroundColor: palette.background, borderColor: palette.border }]}>
                <ThemedText style={[styles.tagText, { color: palette.muted, fontFamily: Fonts.mono }]}>
                  {lesson.intensity}
                </ThemedText>
              </View>
              {lesson.recommendedFor.map((magnitude) => (
                <View
                  key={`${lesson.id}-${magnitude}`}
                  style={[styles.tag, { backgroundColor: palette.background, borderColor: palette.border }]}>
                  <ThemedText style={[styles.tagText, { color: palette.muted, fontFamily: Fonts.mono }]}>
                    {magnitudeLabels[magnitude]}
                  </ThemedText>
                </View>
              ))}
            </View>
          </View>
        ))}
      </View>
      <ScalarSectionHeading eyebrow="FRACTIONAL BADGES" palette={palette} title="Continuous progress, not one-off unlocks" />
      <View style={styles.stack}>
        {badgeTracks.map((badge) => (
          <View key={badge.id} style={[styles.badgeCard, { backgroundColor: palette.surface, borderColor: palette.border }]}>
            <View style={styles.badgeHeader}>
              <View style={styles.badgeCopy}>
                <ThemedText style={[styles.badgeTitle, { color: palette.text }]}>{badge.label}</ThemedText>
                <ThemedText style={[styles.badgeSubtitle, { color: palette.muted, fontFamily: Fonts.mono }]}>
                  {Math.round(badge.progress * 100)}% filled this cycle
                </ThemedText>
              </View>
              <View style={[styles.badgePill, { backgroundColor: palette.background, borderColor: palette.border }]}>
                <ThemedText style={[styles.badgePillText, { color: palette.accent, fontFamily: Fonts.mono }]}>
                  {Math.round(badge.progress * 100)}%
                </ThemedText>
              </View>
            </View>
            <ScalarProgressBar palette={palette} progress={badge.progress} />
            <ThemedText style={[styles.badgeDescriptor, { color: palette.muted }]}>{badge.descriptor}</ThemedText>
          </View>
        ))}
      </View>
      <ScalarSectionHeading eyebrow="LOAD TRACE" palette={palette} title="Weekly micro-progression" />
      <View style={[styles.loadCard, { backgroundColor: palette.surface, borderColor: palette.border }]}>
        <ThemedText style={[styles.loadCopy, { color: palette.muted }]}>Training density remains stable while mobility and velocity trend up.</ThemedText>
        <View style={styles.loadBars}>
          {weeklyLoad.map((entry) => (
            <View key={entry.label} style={styles.loadColumn}>
              <ThemedText style={[styles.loadValue, { color: palette.text, fontFamily: Fonts.mono }]}>{entry.value}</ThemedText>
              <View style={[styles.loadTrack, { backgroundColor: palette.background, borderColor: palette.border }]}>
                <View
                  style={[
                    styles.loadFill,
                    {
                      backgroundColor: palette.accent,
                      height: `${Math.max((entry.value / maxLoad) * 100, 12)}%`,
                    },
                  ]}
                />
              </View>
              <ThemedText style={[styles.loadLabel, { color: palette.muted, fontFamily: Fonts.mono }]}>{entry.label}</ThemedText>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 28,
    paddingBottom: 120,
    gap: 16,
  },
  heroCard: {
    borderWidth: 1,
    borderRadius: 24,
    padding: 20,
    gap: 12,
  },
  heroEyebrow: {
    fontSize: 12,
    letterSpacing: 1.4,
  },
  heroTitle: {
    fontSize: 32,
    lineHeight: 36,
    fontWeight: '700',
  },
  heroCopy: {
    fontSize: 16,
    lineHeight: 24,
  },
  stack: {
    gap: 12,
  },
  lessonCard: {
    borderWidth: 1,
    borderRadius: 22,
    padding: 18,
    gap: 12,
  },
  lessonHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 12,
  },
  lessonHeaderCopy: {
    flex: 1,
    gap: 6,
  },
  lessonCategory: {
    fontSize: 12,
    letterSpacing: 1.2,
  },
  lessonTitle: {
    fontSize: 24,
    lineHeight: 28,
    fontWeight: '700',
  },
  lessonPill: {
    borderWidth: 1,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  lessonPillText: {
    fontSize: 11,
    letterSpacing: 0.8,
  },
  lessonCopy: {
    fontSize: 16,
    lineHeight: 24,
  },
  lessonMeta: {
    fontSize: 15,
    lineHeight: 22,
  },
  lessonProgression: {
    fontSize: 15,
    lineHeight: 22,
    fontWeight: '600',
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    borderWidth: 1,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  tagText: {
    fontSize: 11,
    letterSpacing: 0.8,
  },
  badgeCard: {
    borderWidth: 1,
    borderRadius: 22,
    padding: 18,
    gap: 12,
  },
  badgeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 12,
  },
  badgeCopy: {
    flex: 1,
    gap: 4,
  },
  badgeTitle: {
    fontSize: 22,
    lineHeight: 26,
    fontWeight: '700',
  },
  badgeSubtitle: {
    fontSize: 12,
    letterSpacing: 0.9,
  },
  badgePill: {
    borderWidth: 1,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  badgePillText: {
    fontSize: 11,
    letterSpacing: 0.8,
  },
  badgeDescriptor: {
    fontSize: 15,
    lineHeight: 22,
  },
  loadCard: {
    borderWidth: 1,
    borderRadius: 22,
    padding: 18,
    gap: 16,
  },
  loadCopy: {
    fontSize: 15,
    lineHeight: 22,
  },
  loadBars: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    gap: 10,
  },
  loadColumn: {
    flex: 1,
    alignItems: 'center',
    gap: 8,
  },
  loadValue: {
    fontSize: 11,
    letterSpacing: 0.8,
  },
  loadTrack: {
    width: '100%',
    height: 140,
    borderWidth: 1,
    borderRadius: 999,
    justifyContent: 'flex-end',
    overflow: 'hidden',
    padding: 6,
  },
  loadFill: {
    width: '100%',
    borderRadius: 999,
  },
  loadLabel: {
    fontSize: 11,
    letterSpacing: 0.8,
  },
});
