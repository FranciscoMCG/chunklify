<div align="center">

# @franciscomcg/chunklify 🍰

## An utility function that returns an array in chunks

</div>

[![version][version-badge]][package]
[![downloads][downloads-badge]][npmtrends]

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the project](#about-the-project)
- [Installation](#installation)
- [Usage](#usage)

## About the project

Chunklify is a JavaScript utility function that returns an array in chunks of a given size

---

## Installation

You should install this package in your devDependecies via npm or yarn:

```sh
npm i --save-dev @franciscomcg/chunklify
```

or

```sh
yarn add -D @franciscomcg/chunklify
```

---

## Usage

Import chunklify to your project

```javascript
import chunklify from '@franciscomcg/chunklify';
```

or

```javascript
const chunklify = require('@franciscomcg/chunklify');
```

Call the function with an array and the size of the chunks

```javascript
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const chunked = chunklify(arr, 5);

// [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11]]
```

<!-- LINKS -->

[version-badge]: https://img.shields.io/npm/v/eslint-config-pretty-react?color=red
[package]: https://www.npmjs.com/package/eslint-config-prett-react
[downloads-badge]: https://img.shields.io/npm/dm/eslint-config-pretty-react
[npmtrends]: http://www.npmtrends.com/eslint-config-pretty-react
