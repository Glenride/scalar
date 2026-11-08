import { StyleSheet, View } from 'react-native';

import { AppColorPalette } from '@/constants/theme';

type ScalarProgressBarProps = {
  palette: AppColorPalette;
  progress: number;
};

export function ScalarProgressBar({ palette, progress }: ScalarProgressBarProps) {
  return (
    <View style={[styles.track, { backgroundColor: palette.background, borderColor: palette.border }]}>
      <View style={[styles.fill, { backgroundColor: palette.accent, width: `${Math.max(progress * 100, 6)}%` }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    height: 10,
    borderRadius: 999,
    borderWidth: 1,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    borderRadius: 999,
  },
});
