# Advent of Code

Solutions for [Advent of Code](https://adventofcode.com)

## Past solutions by year

- [2015](2015)
- 2016
- [2017](2017)
- [2018](2018)
- [2019](2019)
- 2020
- [2021](2021)
- [2022](2022)

## Development instructions

### JavaScript

- Install dependencies

```sh
npm ci
```

- Add boilerplate for new exercise

```sh
cp -r template-js <path to folder>
# Example
# cp -r template-js 2022/05
```

- Run tests

```sh
# Run all tests
npm test
# Run tests in a subfolder
npm test 2022/
```

- Run solution against puzzle input

```sh
node <path to index.js file>
# Eg
node 2021/02-dive/index.js
```

- Format code

```sh
npm run format
```
