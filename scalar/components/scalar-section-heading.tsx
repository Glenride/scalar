import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { AppColorPalette, Fonts } from '@/constants/theme';

type ScalarSectionHeadingProps = {
  eyebrow: string;
  palette: AppColorPalette;
  title: string;
};

export function ScalarSectionHeading({ eyebrow, palette, title }: ScalarSectionHeadingProps) {
  return (
    <View style={styles.container}>
      <ThemedText style={[styles.eyebrow, { color: palette.accent, fontFamily: Fonts.mono }]}>{eyebrow}</ThemedText>
      <ThemedText style={[styles.title, { color: palette.text }]}>{title}</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 4,
    marginTop: 8,
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
});
