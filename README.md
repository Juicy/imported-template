&lt;imported-template&gt;
==============

`<imported-template>` is a custom element that let's you load HTML partials into your Web Components, and take full control over loaded `<script>`s and `<link rel="import">`s.

If you have this:

```javascript
var model = {
  appdata: {
    username: "World"
  },
  html: "/path/to/file.html"
}
```
**/path/to/file.html**:
```html
<h1>Hello {{username}}</h1>
```

You can put it on screen with this:

```html
<template is="imported-template" bind="{{ appdata }}" content="{{ html }}"></template>
```

To produce that:

```html
<h1>Hello World</h1>
```

Usage examples can be found in [examples](http://puppetjs.github.io/imported-template/examples/index.html).

### Rationale

`imported-template` evolved out of [x-html](https://github.com/PuppetJs/x-html) due to need for better control of `<scripts>` and HTML Imports execution. See ongoing discussion [here](https://github.com/PuppetJs/x-html/issues/8)


### Features

TBD

### Usage

TBD

## Options/Attributes
besides other `<template>` attributes given by [TemplateBinding](http://www.polymer-project.org/docs/polymer/template.html)

Attribute    | Options       | Default          | Description
---          | ---           | ---              | ---
`content`    | *string*		 | `""`				| Safe HTML code, or path to partial to be loaded.
`iframe`     | *boolean*	 | `false`			| Indicate misbehaved partial to be loaded in `<iframe>`.


### Dependencies

TBD

### Changelog

#### v0.0.2

- Load partials using HTML Imports
- `iframe` attribute to indicate misbehaved partial to be loaded in `<iframe>`.

#### v0.0.1

Started its own repo: [PuppetJs/imported-template](https://github.com/PuppetJs/imported-template)
Forked from [PuppetJs/x-html](https://github.com/PuppetJs/x-html) ([@9be11a8e](https://github.com/PuppetJs/x-html/tree/9be11a8e67c17dc436c517047f394f9680836f64))
