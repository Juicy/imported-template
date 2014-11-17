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

## Demo/Examples

[Check it live!](http://juicy.github.io/imported-template/examples/index.html)

## Install

Install the component using [Bower](http://bower.io/):

```sh
$ bower install imported-template --save
```

Or [download as ZIP](https://github.com/Juicy/imported-template/archive/gh-pages.zip).

## Usage

1. Import Web Components' polyfill:

    ```html
    <script src="//cdn.jsdelivr.net/polymer.platform/0.4.2/platform.js"></script>
    ```

2. Import Custom Element:

    ```html
    <link rel="import" href="bower_components/imported-template/imported-template.html">
    ```

3. Start using it!

    ```html
    <template is="imported-template" content="./your/partial.html"></template>
    ```

## Options/Attributes
We [plan](https://github.com/Juicy/imported-template/issues/1) to support other `<template>` attributes given by [TemplateBinding](http://www.polymer-project.org/docs/polymer/template.html)

Attribute    | Options       | Default          | Description
---          | ---           | ---              | ---
`content`    | *string*		 | `""`				| Safe HTML code, or path (starts with `/` or `./`) to partial to be loaded.
`iframe`     | *boolean*	 | `false`			| Indicate misbehaved partial to be loaded in `<iframe>`.


### Dependencies

`<imported-template>` is dependent on [Polymer](http://www.polymer-project.org/) as a polyfill for Web Components APIs. It also relies on [TemplateBinding](http://www.polymer-project.org/docs/polymer/template.html)

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

For detailed changelog, check [Releases](https://github.com/Juicy/imported-template/releases).

## License

[MIT License](http://opensource.org/licenses/MIT)