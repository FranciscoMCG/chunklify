<div align="center">

# @franciscomcg/chunklify 🍰

## An utility function that returns an array in chunks

</div>

![version][version-badge]
![size][size-badge]

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the project](#about-the-project)
- [Installation](#installation)
- [Usage](#usage)
- [Local development](#local-development)

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

---

## Local development

For local development, please follow the below steps:

1. Clone the repository

```sh
git clone https://github.com/FranciscoMCG/chunklify.git
```

2. Access the project folder

```sh
cd chunklify
```

3. Install dependencies

```sh
npm install
```

4. To run tests use the following script

```sh
npm run test
```

<!-- LINKS -->

[version-badge]: https://img.shields.io/npm/v/@franciscomcg/chunklify?color=red
[package]: https://www.npmjs.com/package/@franciscomcg/chunklify
[size-badge]: https://img.shields.io/bundlephobia/min/@franciscomcg/chunklify
