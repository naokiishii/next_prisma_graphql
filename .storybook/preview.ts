import type { Preview } from '@storybook/react'
import '../src/styles/globals.css' // replace with the name of your tailwind css file

import { withThemeByDataAttribute } from '@storybook/addon-themes'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      // nameOfTheme: 'dataAttributeForTheme',
      light: '',
      dark: 'dark',
    },
    defaultTheme: 'light',
    dataAttribute: 'data-theme',
  }),
]

export default preview
