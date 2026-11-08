import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { AppColorPalette, Fonts } from '@/constants/theme';

type ScalarStatusHeroProps = {
  isDeployed: boolean;
  palette: AppColorPalette;
  version: string;
};

export function ScalarStatusHero({ isDeployed, palette, version }: ScalarStatusHeroProps) {
  return (
    <View style={[styles.container, { backgroundColor: palette.surface, borderColor: palette.border }]}>
      <View style={styles.header}>
        <ThemedText style={[styles.eyebrow, { color: palette.accent, fontFamily: Fonts.mono }]}>
          SCALAR // HUMAN MACHINE DASHBOARD
        </ThemedText>
        <View
          style={[
            styles.badge,
            { backgroundColor: isDeployed ? palette.accent : palette.background, borderColor: palette.border },
          ]}>
          <ThemedText
            style={[
              styles.badgeText,
              { color: isDeployed ? palette.background : palette.muted, fontFamily: Fonts.mono },
            ]}>
            {isDeployed ? `DEPLOYED ${version}` : 'READY'}
          </ThemedText>
        </View>
      </View>
      <ThemedText style={[styles.title, { color: palette.text }]}>Deploy a workout in three taps.</ThemedText>
      <ThemedText style={[styles.copy, { color: palette.muted }]}>
        SCALAR measures your current capacity, matches the environment, and compiles a session that can execute without
        motivational overhead.
      </ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 24,
    padding: 20,
    gap: 12,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  eyebrow: {
    fontSize: 12,
    letterSpacing: 1.4,
  },
  badge: {
    borderWidth: 1,
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  badgeText: {
    fontSize: 11,
    letterSpacing: 1.1,
  },
  title: {
    fontSize: 34,
    lineHeight: 38,
    fontWeight: '700',
  },
  copy: {
    fontSize: 16,
    lineHeight: 24,
  },
});
