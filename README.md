&lt;imported-template&gt; [![Build Status](https://travis-ci.org/Juicy/imported-template.svg?branch=master)](https://travis-ci.org/Juicy/imported-template)
==============
> Declarative way for client-side includes boosted with HTML Imports features.

`<imported-template>` is a custom element that lets you load template from external file into your document, and take full control over loaded `<script>`s and `<link rel="import">`s. Thanks to HTML Imports - caching, script execution, etc. are completely native.
It also provides a simple data-binding feature, that plays nice with Polymer or pure JavaScript + HTML data-binding.

### Small sample

If you have your partial **/path/to/file.html** full of your HTML magic:
```html
<link rel="import" href="awesome-component.html">
<script src="init/some/stuff.js"></script>
<template>
	<h1>Hello World</h1>
	<awesome-component></awesome-component>
	<script>doMagicPerStampedContent();</script>
</template>
```
You can load all dependencies and stamp template content in your main document with just
```html
<imported-template href="/path/to/file.html"></imported-template>
```

> Please note that dependencies will be loaded only once, but content and inner `<script>doMagic...` will get stamped and executed as many times as you use `<imported-template>`

## Demo/Examples

To see more features and examples
[Check it live!](http://juicy.github.io/imported-template/examples/index.html)

## [Tests/Spec](http://juicy.github.io/imported-template/test/)

## Features
See the full article on features, use cases and the way it's done at http://starcounter.io/html-partialsincludes-webcomponents-way/

 - Imports external files, and stamps inline HTML markup,
 - Supports multiple (concatenated) templates per partial,
 - HTML Imports features:
  - Sends request for template only once (HTML Import's caching),
  - Supports `<script>, <link>, <style>` tags to be executed once,
  - Supports `<script>, <style>` tags per template instance,
 - Attaches data-binding to imported content,
 - Works fine with Polymer auto-binding features


### Partial limitations

 - It should be W3C compliant Document body,
 - It should contain at least one `<template>` tag in the root node.

### Rationale

`imported-template` evolved out of [x-html](https://github.com/Palindrom/x-html) (now [`juicy-html`](https://github.com/Juicy/juicy-html) ) due to need for better control of `<scripts>` and HTML Imports execution. See discussion [here](https://github.com/Juicy/juicy-html/issues/8)


## Install

Install the component using [Bower](http://bower.io/):

```sh
$ bower install imported-template --save
```

Or [download as ZIP](https://github.com/Juicy/imported-template/archive/master.zip).

## Usage

1. Import Web Components' polyfill, if needed:

    ```html
    <script src="bower_components/webcomponentsjs/webcomponents-lite.js"></script>
    ```

2. Import Custom Element:

    ```html
    <link rel="import" href="bower_components/imported-template/imported-template.html"/>
    ```

3. Start using it!

	To load content from file:
    ```html
    <imported-template href="/your/partial.html"></imported-template>
    ```
	To attach data to content:
    ```html
    <imported-template href="/your/partial.html" model='{"json":"data"}'></imported-template>
	```

## Attributes/Properties

Attribute           | Options         | Default     | Description
---                 | ---             | ---         | ---
`html`              | *String*		  | `""`	    | Safe HTML code to be stamped. Setting this one will skip any pending request for `href` and remove `href` attribute.
`href`              | *String*		  | `""`	    | Path of a partial to be loaded. Setting this one will remove `html` attribute.
`model`(_optional_) | *Object/String* | `undefined` | Object (or `JSON.stringify`'ied Object) to be attached to every stamped (root) node

## Properties

Property       | Type              | Default       | Description
---            | ---               | ---           | ---
`model`        | *Object*          | `undefined`   | See [attributes](#Attributes), plays nice with Polymer data-binding
`html`         | *String*          | `""`	       | See [attributes](#Attributes)
`href`         | *String*          | `""`	       | See [attributes](#Attributes)
`pending`      | *HTMLLinkElement* |               | HTML Import's `<link>` that is being loaded (if any)
`stampedNodes` | *Array*           | `[]`          | Array of stamped nodes.

Please note, that properties are available after element is upgraded.
To provide a state before element is upgraded, please use attributes.

## Events

Name       | When                               | `event.detail`
---        | ---                                | ---
`stamped`  | Every time content is (re-)stamped | *Array* of stamped *Node* s
`stamping` | Just before stamping the fragment  | *DocumentFragment*	being stamped

### Dependencies

`<juicy-html>` is framework agnostic custom element, so all you need is Web Components support. However, it plays really nice with Polymer Auto-binding templates, or any other binding library, that sets HTML elements' properties and/or attributes. Check our demos and examples.

## Browser Support

Browser support relies mainly on polyfills support/spec compliance.

| Chrome | IE11 | Edge | Firefox  | Safari 10 |
|:------:|:----:|:----:|:--------:|:--------:|
|  ✓     | ✓**  | ✓    | ✓        | ✓        |

\*\* **V1**: IE11 does not support `currentScript`, so a bunch of tests for useful cases fail.


## [Contributing and Development](CONTRIBUTING.md)

## History

For the detailed changelog, check [Releases](https://github.com/Juicy/imported-template/releases).

## License

MIT
