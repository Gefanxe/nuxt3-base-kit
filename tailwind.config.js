/** @type {import('tailwindcss/types').Config} */

// const defaultTheme = require('tailwindcss/defaultTheme');
import defaultTheme from 'tailwindcss/defaultTheme';

export const darkMode = 'class';
export const content = [
  './components/**/*.{js,vue,ts}',
  './layouts/**/*.vue',
  './pages/**/*.vue',
  './plugins/**/*.{js,ts}',
  './app.vue',
  './assets/**/*.scss',
  './assets/**/*.css'
];
export const theme = {
  extend: {
    fontFamily: {
      sans: ['"Inter var"', ...defaultTheme.sans]
    }
  }
};
export const variants = {
  extend: {}
};
export const plugins = [
  require('@tailwindcss/forms'),
  require('@tailwindcss/typography'),
  require('@tailwindcss/line-clamp'),
  require('@tailwindcss/aspect-ratio')
];
