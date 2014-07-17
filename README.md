&lt;imported-template&gt;
==============

`<imported-template>` is a custom element that let's you load HTML partials into your Web Components, and take full control over loaded `<script>`s and `<link rel="import">`s. Thanks to HTML Imports caching, script execution, etc. is almost native.

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
<template bind="{{ appdata }}">
	<h1>Hello {{username}}</h1>
</template>
```

You can put it on screen with this:

```html
<template is="imported-template" content="{{ html }}"></template>
```

To produce that:

```html
<h1>Hello World</h1>
```

Usage examples can be found in [examples](http://Juicy.github.io/imported-template/examples/index.html).

### Rationale

`imported-template` evolved out of [x-html](https://github.com/PuppetJs/x-html) (now [`juicy-html`](https://github.com/Juicy/juicy-html) ) due to need for better control of `<scripts>` and HTML Imports execution. See ongoing discussion [here](https://github.com/Juicy/juicy-html/issues/8)


### Features

 - Sends request for template only once (HTML Import's caching),
 - Supports `<script>, <link>, <style>` tags to be executed once,
 - Supports `<script>, <style>` tags per template instance,
 - Multiple (concatenated) templates per partial. 

### Usage

TBD

## Options/Attributes
We [plan](https://github.com/Juicy/imported-template/issues/1) to support other `<template>` attributes given by [TemplateBinding](http://www.polymer-project.org/docs/polymer/template.html)

Attribute    | Options       | Default          | Description
---          | ---           | ---              | ---
`content`    | *string*		 | `""`				| Safe HTML code, or path (starts with `/` or `./`) to partial to be loaded.
`iframe`     | *boolean*	 | `false`			| Indicate misbehaved partial to be loaded in `<iframe>`.


### Dependencies

`<imported-template>` is dependent on [Polymer](http://www.polymer-project.org/) as a polyfill for Web Components APIs. It also relies on [TemplateBinding](http://www.polymer-project.org/docs/polymer/template.html)

### Changelog

#### v0.0.3
 - Workaround for Chrome bug http://crbug.com/389566, Polymer/polymer#554, Polyjuice/Launcher#82

#### v0.0.2
 - Demos updated
 - Repo renamed to: [Juicy/imported-template](https://github.com/Juicy/imported-template)
 - Polymer updated

#### v0.0.1

 - Started its own repo: [PuppetJs/imported-template](https://github.com/PuppetJs/imported-template)
   Forked from [PuppetJs/x-html](https://github.com/PuppetJs/x-html) ([@9be11a8e](https://github.com/PuppetJs/x-html/tree/9be11a8e67c17dc436c517047f394f9680836f64))
 - Load partials using HTML Imports,
 - `iframe` attribute to indicate misbehaved partial to be loaded in `<iframe>`,
