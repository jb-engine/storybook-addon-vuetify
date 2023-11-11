# storybook-addon-vuetify1

Storybook's Vuetify Addon

**Install**

```sh
yarn add -D storybook-addon-vuetify1
```

**Usage**

Add `storybook-addon-vuetify1` addon to `.storybook/main.js`

```js
module.exports = {
  addons: [
    'storybook-addon-vuetify1'
  ]
}
```

Add `vueitfy` decorator to `.storybook/preview.js`

```js
import { withVuetify } from 'storybook-addon-vuetify1/dist/decorators'

export const decorators = [
  withVuetify
]
```

## License
License under [MIT](LICENSE)
