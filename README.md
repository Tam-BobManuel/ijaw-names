# Ijaw Names Generator

## Overview

The Ijaw and Kalabari Names Generator is a package designed to generate random Ijaw names along with their meanings. The Ijaw people are an ethnic group in the Niger Delta region of Nigeria, located in the South-South geopolitical zone of the country.

This package allows users to:

- Generate random Ijaw names.
- Retrieve the meaning of an Ijaw name.
- Check if a given Ijaw name exists.

## Installation

To install the Ijaw-Names package, use npm:

[npm package](https://www.npmjs.com/package/ijaw-names)

use the command:

```npm i ijaw-names```

## Usage

The package provides a function `ijawNames(name)`, which accepts an optional parameter `name`:

- If `name` is not provided or an empty string, the function returns a random Ijaw name along with its meaning.
- If `name` is provided, the function checks if the name exists in the dataset and returns `true` if it does, otherwise `false`.
- If `name` is provided along with accessing the `.meaning` property, the function returns the meaning of the name if it exists, otherwise `false`.

### Example Usage

```javascript
const ijawNames = require('ijaw-names-generator');

// Generate a random Ijaw name
console.log(ijawNames());

// Retrieve the meaning of a random Ijaw name
console.log(ijawNames().meaning);

// Retrieve a random Ijaw name
console.log(ijawNames().name);

// Check if a specific Ijaw name exists
console.log(ijawNames('Alawei').name);

// Returns the meaning of name provided or false if it doesn't exist
console.log(ijawNames('Alawei').meaning);
```

# Contributing

## Contributions are welcome! If you find any issues or have suggestions for improvements,please feel free to open an issue or submit a pull request on [GitHub](https://github.com/Tam-BobManuel/ijaw-names).
# License

## This package is licensed under the [GNU General Public License](https://www.gnu.org/licenses/).
