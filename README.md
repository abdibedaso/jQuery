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


| # Topics |                                                                       Topics                                                                        |
| -------- | :-------------------------------------------------------------------------------------------------------------------------------------------------: |
| 01       |                                                             [jQuery Selectors](./02-Selectors)                                                        |
### 01 - jQuery Selectors
 We use jQuery selectors to select and manipulate HTML element(s).

 - The element Selector 
    - The jQuery element selector selects elements based on the element name.
    
```js
$("p") // To select all <p> elements on a page.
```

 - The element Selector 
    - The jQuery element selector selects elements based on the element name.
    
```js
$("p") // To select all <p> elements on a page.
```

 - The #id Selector
    - The jQuery #id selector uses the id attribute of an HTML tag to find the specific element.
    
```js
$("#id") // To find an element with a specific id, we use a hash character, followed by the id of the HTML element.
```

 - The .class Selector
    - The jQuery #id selector uses the id attribute of an HTML tag to find the specific element.
    
```js
$(".class") // To find elements with a specific class, we use a period character, followed by the name of the class.
```

<br/>
<br/>
<div align="center">
  <h3> jQuery powered applications </h3>
  <hr/>
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