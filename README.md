## Storybook Vuetify Addon

#### Overview

The **storybook-addon-vuetify** is an extension for Storybook that enhances your Vue.js development workflow by seamlessly integrating with Vuetify, a popular Vue.js UI library. This addon allows you to showcase and interact with your Vuetify components in a Storybook environment.

### Installation

To get started, install the addon using Yarn:

```sh
yarn add -D storybook-addon-vuetify@github.com:jb-engine/storybook-addon-vuetify#build-release
```

#### Configuration

Update `.storybook/main.js`:

Add the 'storybook-addon-vuetify' to the addons array in your Storybook main configuration file.

```sh
module.exports = {
  addons: [
    'storybook-addon-vuetify'
  ]
};
```

Update `.storybook/preview.js`:

Add the withVuetify decorator to your Storybook preview configuration file. This decorator ensures that your Vuetify styles are applied to the Storybook stories.

```sh
import { withVuetify } from 'storybook-addon-vuetify/dist/decorators'

export const decorators = [
  withVuetify
]
```
#### Dependencies
- vue: 2.6.11
- vuetify: 1.3.16
- @storybook/vue: 6.5.16 

## License

License under [MIT](LICENSE)
