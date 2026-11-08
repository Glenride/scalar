/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from 'react-native';

const tintColorLight = '#0B8E9B';
const tintColorDark = '#35F3FF';

export const Colors = {
  light: {
    text: '#08141B',
    background: '#F4FBFD',
    surface: '#FFFFFF',
    tint: tintColorLight,
    icon: '#536A74',
    muted: '#5B727B',
    border: '#D6E5EC',
    accent: tintColorLight,
    success: '#157F52',
    warning: '#C99012',
    tabIconDefault: '#667E87',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECFCFF',
    background: '#03080B',
    surface: '#0A151A',
    tint: tintColorDark,
    icon: '#7C9199',
    muted: '#8CA4AC',
    border: '#15303A',
    accent: tintColorDark,
    success: '#45D483',
    warning: '#F2C14E',
    tabIconDefault: '#6C848D',
    tabIconSelected: tintColorDark,
  },
};

export type AppColorPalette = typeof Colors.light;

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
