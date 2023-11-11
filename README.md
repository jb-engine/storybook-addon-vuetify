# storybook-addon-vuetify 1.*

Storybook's Vuetify Addon

**Install**

```sh
yarn add -D storybook-addon-vuetify
```

**Usage**

Add `storybook-addon-vuetify` addon to `.storybook/main.js`

```js
module.exports = {
  addons: [
    'storybook-addon-vuetify'
  ]
}
```

Add `vueitfy` decorator to `.storybook/preview.js`

```js
import { withVuetify } from 'storybook-addon-vuetify/dist/decorators'

export const decorators = [
  withVuetify
]
```

## License
License under [MIT](LICENSE)
