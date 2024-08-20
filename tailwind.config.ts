import daisyui from 'daisyui';
import { dark } from 'daisyui/src/theming/themes';
import defaultTheme from 'tailwindcss/defaultTheme';

const style = {
  colors: {
    dark: {
      primary: '#fff',
      primaryContent: '#000',
      secondary: '#6DE5D7',
      secondaryContent: '#000',
      neutral: '#1B1F29',
      neutralContent: '#BEC8D2',
      success: '#06FFC3',
      successContent: '#000',
      error: '#EF0459',
      errorContent: '#000',
      muted: '#181C21',
      mutedForeground: '#9CA7B2',
      background: '#000',
      text: '#fff',

      story: '#F1D07B',
      experience: '#4CD895',
      work: '#4CD895',
    },
  },
};

export default {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  prefix: '',
  plugins: [daisyui],
  theme: {
    extend: {
      colors: {
        muted: 'var(--muted)',
        'muted-foreground': 'var(--muted-foreground)',
        story: 'var(--story)',
        experience: 'var(--experience)',
        work: 'var(--work)',
      },
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        '8xl': '90rem',
      },
    },
  },
  daisyui: {
    themes: [
      {
        dark: {
          ...dark,
          primary: style.colors.dark.primary,
          'primary-content': style.colors.dark.primaryContent,
          secondary: style.colors.dark.secondary,
          'secondary-content': style.colors.dark.secondaryContent,
          neutral: style.colors.dark.neutral,
          neutralContent: style.colors.dark.neutralContent,
          success: style.colors.dark.success,
          'success-content': style.colors.dark.successContent,
          error: style.colors.dark.error,
          'error-content': style.colors.dark.errorContent,
          '--muted': style.colors.dark.muted,
          '--muted-foreground': style.colors.dark.mutedForeground,
          'base-100': style.colors.dark.background,
          'base-content': style.colors.dark.text,

          '--rounded-btn': '20rem',
          '--rounded-input': '0.6rem',
          '--tab-border': '2px',
          '--tab-radius': '.5rem',

          '--story': style.colors.dark.story,
          '--experience': style.colors.dark.experience,
          '--work': style.colors.dark.work,
        },
      },
    ],
  },
};
