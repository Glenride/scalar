import { Link } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { AppColorPalette, Fonts } from '@/constants/theme';

type ScalarChangelogCardProps = {
  copy: string;
  palette: AppColorPalette;
  title: string;
};

export function ScalarChangelogCard({ copy, palette, title }: ScalarChangelogCardProps) {
  return (
    <View style={[styles.container, { backgroundColor: palette.surface, borderColor: palette.border }]}>
      <ThemedText style={[styles.eyebrow, { color: palette.accent, fontFamily: Fonts.mono }]}>CHANGELOG</ThemedText>
      <ThemedText style={[styles.title, { color: palette.text }]}>{title}</ThemedText>
      <ThemedText style={[styles.copy, { color: palette.muted }]}>{copy}</ThemedText>
      <Link href="/modal" style={styles.link}>
        <ThemedText style={[styles.linkText, { color: palette.accent, fontFamily: Fonts.mono }]}>INSPECT FULL CHANGELOG</ThemedText>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 24,
    padding: 20,
    gap: 10,
  },
  eyebrow: {
    fontSize: 12,
    letterSpacing: 1.4,
  },
  title: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: '700',
  },
  copy: {
    fontSize: 15,
    lineHeight: 22,
  },
  link: {
    marginTop: 4,
  },
  linkText: {
    fontSize: 12,
    letterSpacing: 1.1,
    fontWeight: '700',
  },
});
