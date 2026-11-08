import { Pressable, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { AppColorPalette, Fonts } from '@/constants/theme';

type ScalarSelectionChipProps = {
  detail: string;
  label: string;
  onPress: () => void;
  palette: AppColorPalette;
  selected: boolean;
};

export function ScalarSelectionChip({
  detail,
  label,
  onPress,
  palette,
  selected,
}: ScalarSelectionChipProps) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        {
          backgroundColor: selected ? palette.accent : palette.surface,
          borderColor: selected ? palette.accent : palette.border,
        },
      ]}>
      <ThemedText
        style={[
          styles.label,
          {
            color: selected ? palette.background : palette.text,
            fontFamily: Fonts.sans,
          },
        ]}>
        {label}
      </ThemedText>
      <ThemedText
        style={[
          styles.detail,
          {
            color: selected ? palette.background : palette.muted,
            fontFamily: Fonts.mono,
          },
        ]}>
        {detail}
      </ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 15,
    gap: 4,
  },
  label: {
    fontSize: 18,
    fontWeight: '700',
  },
  detail: {
    fontSize: 12,
    letterSpacing: 0.8,
  },
});
