import "../styles/globals.css";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['Introduction', 'StyleGuide', ['Logos', 'Colors', 'Typography', ['Headings', 'Text', 'Lists', 'Blockquote', 'Form']]],
    },
  },
}
