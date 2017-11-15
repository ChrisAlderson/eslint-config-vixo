# eslint-config-vixo

[![Build Status](https://travis-ci.org/ChrisAlderson/eslint-config-vixo.svg?branch=master)](https://travis-ci.org/ChrisAlderson/eslint-config-vixo)
[![Dependency Status](https://david-dm.org/ChrisAlderson/eslint-config-vixo.svg)](https://david-dm.org/ChrisAlderson/eslint-config-vixo)
[![devDependency Status](https://david-dm.org/ChrisAlderson/eslint-config-vixo/dev-status.svg)](https://david-dm.org/ChrisAlderson/eslint-config-vixo?type=dev)

Yet another eslint configuration. It follows mostly standard with the exception
of two rules:

**padded-blocks**

Forces to use padded block for classes.

**space-before-function-paren**

No space before function parentheses, Because I think those look silly with ES6 classes


# Installation

```
 $ npm i --save-dev eslint-config-vixo
```

# Usage

You should now this by now. Just extend it in your ESLint configuration:

```json
{
  "extends": "vixo"
}
```

# License

MIT License

Copyright (c) 2017 - eslint-config-vixo - Released under the MIT license.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
