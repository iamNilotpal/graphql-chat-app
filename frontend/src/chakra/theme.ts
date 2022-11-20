import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

export const theme = extendTheme(
  { config },
  {
    colors: {
      brand: {
        blue: '#3d84f7',
        yellow: '#f4f73e',
      },
    },
    fonts: {
      heading: `'Montserrat', sans-serif`,
      body: `'Montserrat', sans-serif`,
    },
    styles: {
      global: () => ({
        body: {
          bg: 'whiteAlpha.200',
        },
      }),
    },
  }
);
