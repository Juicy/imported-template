&lt;imported-template&gt; [![Build Status](https://travis-ci.org/Juicy/imported-template.svg?branch=gh-pages)](https://travis-ci.org/Juicy/imported-template)
==============

`<imported-template>` is a custom element that let's you load template from external file into your document, and take full control over loaded `<script>`s and `<link rel="import">`s. Thanks to HTML Imports - caching, script execution, etc. is completely native.
It also provides simple data-binding feature, that plays nice with Polymer or pure JavaScript + HTML data-binding.

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
You can stamp template content in your main document with just
```html
<template is="imported-template" content="/path/to/file.html"></template>
```

## Demo/Examples

To see more features and examples
[Check it live!](http://juicy.github.io/imported-template/examples/index.html)

## Features

 - Imports external files, and stamps inline HTML markup,
 - Supports multiple (concatenated) templates per partial,
 - HTML Imports features:
  - Sends request for template only once (HTML Import's caching),
  - Supports `<script>, <link>, <style>` tags to be executed once,
  - Supports `<script>, <style>` tags per template instance,
 - Attaches data-binding to imported content,
 - Works fine with Polymer auto-binding features (for > 1.0.0 also)


### Partial limitations

 - It should be W3C compliant Document body,
 - It should contain at least one `<template>` tag in root node.

### Rationale

`imported-template` evolved out of [x-html](https://github.com/PuppetJs/x-html) (now [`juicy-html`](https://github.com/Juicy/juicy-html) ) due to need for better control of `<scripts>` and HTML Imports execution. See discussion [here](https://github.com/Juicy/juicy-html/issues/8)


## Install

Install the component using [Bower](http://bower.io/):

```sh
$ bower install imported-template --save
```

Or [download as ZIP](https://github.com/Juicy/imported-template/archive/gh-pages.zip).

## Usage

1. Import Web Components' polyfill, if needed:

    ```html
    <script src="bower_components/webcomponentsjs/webcomponents.js"></script>
    ```

2. Import Custom Element:

    ```html
    <link rel="import" href="bower_components/imported-template/imported-template.html"/>
    ```

3. Start using it!

	To load content from file:
    ```html
    <template is="imported-template" content="./your/partial.html"></template>
    ```
	To attach data to content:
    ```html
    <template is="imported-template" content="./your/partial.html" model='{"json":"data"}'></template>
	```

## Attributes/Properties

Attribute | Options      | Default  | Description
---       | ---          | ---      | ---
`content` | *String*	 | `""`		| Safe HTML code, or path (starts with `/`, `./`, or `../`) to partial to be loaded.
`model`   | *JSON*		 | 			| (_optional_) Data model to be attached to every stamped node

## Properties

Property       | Type      | Description
---            | ---       | ---
`model`        | *JSON*	   | Attached model, plays nice with Polymer data-binding
`stampedNodes` | *Array*   | Array of stamped nodes.

## Events

Name       | Detail                                    | Description
---        | ---                                       | ---
`stamping` | *DocumentFragment*	fragment being stamped | Called just before stamping the fragment

### Dependencies

`<juicy-html>` is framework agnostic custom element, so all you need is Web Components support. However, it plays really nice with Polymer Auto-binding templates, or any other binding library, that sets HTML elements' properties and/or attributes. Check our demos and examples.

## Browser Support

Browser supports relies mainly on polyfills support/spec compliance.

| Chrome | IE11 | Edge | Firefox  | Safari 8 | Safari 9 |
|:------:|:----:|:----:|:--------:|:--------:|:--------:|
|  ✓     | ✓*   | ✓*   | ✓*       | ~        | ~*       |

\* There is a workaround for [polyfill issue](https://github.com/webcomponents/webcomponentsjs/issues/470), to execute scripts and apply styles define inside template in imported html. Also, some hacks are made to preserve correct position in DOM of scripts executed by polyfill, so `previousSibling` and Polymer's `dom-bind`/`dom-repeat` can be used as in native Web Components, see [more sample use cases](https://github.com/Juicy/imported-template/tree/gh-pages/test/use-cases)

~ SauceLabs tests passed but it may not be stable.

 :construction: Core features more or less works, but some tests are failing.

## [Contributing and Development](CONTRIBUTING.md)

## History

For detailed changelog, check [Releases](https://github.com/Juicy/imported-template/releases).

## License

MIT
