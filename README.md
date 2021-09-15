# jQuery

| # Topics |                                                                       Topics                                                                        |
| -------- | :-------------------------------------------------------------------------------------------------------------------------------------------------: |
| 00       |                                                             [Getting Started](./00-Getting-Started)                                                 |

### 00 - Getting Started
  jQuery is a JavaScript library specialized for changing web page documents on the fly.
  
  - The Document Ready Event
    - All jQuery methods in our examples, are inside a document ready event:

```js
$(document).ready(function(){

  // jQuery methods go here...

});
```

This is to prevent any jQuery code from running before the document is finished loading (is ready).
- An even shorter method for the document ready event:

```js
$(function(){

  // jQuery methods go here...

});
```

| # Topics |                                                                       Topics                                                                        |
| -------- | :-------------------------------------------------------------------------------------------------------------------------------------------------: |
| 01       |                                                             [jQuery Function](./01-Function)                                                        |
### 01 - jQuery Function
 We use jQuery function to select elements from an HTML page to manipulate.

```js
jQuery(selector | java object | HTML)
```

- There is a $ shortcut so that we don't have to type “jQuery" over and over.
```js
$(selector | java object | HTML)
```

 The jQuery function can handle selectors, straight HTML, and even JavaScript objects.

<div align="center">
  <h1> jQuery powered applications </h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/abdibedaso/">
    <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <br/>
<sub>Author:
    <a href="https://www.linkedin.com/in/abdibedaso/" target="_blank">Abdi T. Bedaso</a>
    <br>
    <small> September, 2021</small>
</sub>
</div>