# transform-string [![Build Status](https://travis-ci.com/abranhe/transform-string.svg?branch=master)](https://travis-ci.com/abranhe/transform-string)

> Transform any string using properties CSS like


## Install

```
$ npm install transform-string
```


## Usage

```js
const transformString = ('transform-string');

transformString('unicorns');
//=> 'Unicorns'

transformString.capitalize('hello world');
//=> 'Hello World'
```
or

```js
import transformString, { capitalize } from 'transform-string';

transformString('unicorns');
//=> 'Unicorns'

capitalize('hello world');
//=> 'Hello World'
```

## API

### transformString(input, [options])

#### input

Type: `string`

The input to be transformed

#### options

Type: `object`

##### type

Type: `string`<br>
Default: `title`

String transform type.

Types:

- `title`
- `capitalize`
- `lowercase`
- `uppercase`

### title(input)

#### input

Type: `string`

Capitalizes first letter of string

### capitalize(input)

#### input

Type: `string`

Capitalizes first letter of each word in string

### lowercase(input)

#### input

Type: `string`

Converts all to lowercase

### uppercase(input)

#### input

Type: `string`

Converts all to uppercase

## Related

- [capitalize-first-letters](https://github.com/abranhe/capitalize-first-letters) Capitalizes first letters of each word in string

## License

MIT © [Abraham Hernandez](https://abranhe.com)
