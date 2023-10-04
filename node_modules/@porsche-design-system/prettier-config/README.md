# Porsche Design System - Prettier Config

A globally standardized [Prettier](https://prettier.io) configuration that can be used with different projects.

## Using the Prettier Config

### Installation

Run the following command using [npm](https://www.npmjs.com):

```bash
npm install @porsche-design-system/prettier-config --save-dev
```

If you prefer [Yarn](https://yarnpkg.com), use the following command instead:

```bash
yarn add @porsche-design-system/prettier-config --dev
```

### Usage
Requires that [Prettier](https://prettier.io) is already set up.

1.  Edit `prettier.config.js`:

```js
module.exports = {
  // ...
  ...require('@porsche-design-system/prettier-config')
};
```

## License

- MIT
