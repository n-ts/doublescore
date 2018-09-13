# doublescore
Tiny JavaScript Element Selector.

Replace `querySelector`, `querySelectorAll`, `getElementById`, `getElementsByTagName` and `getElementsByClassName` with one tiny function. This can save hundreds of bytes and make your code more readable.


# Usage

Bundle / Include `doublescore.min.js` file in your project and call `__` function to select elements.

```javascript
// document.getElementById("targetElm").innerHTML = "Lorem ipsum<br>";
__("#targetElm").innerHTML = "Lorem ipsum<br>";

// document.getElementsByClassName("targetClassName")[0].innerHTML = "Lorem ipsum<br>";
__(".targetClassName")[0].innerHTML = "Lorem ipsum<br>";

// document.getElementsByTagName("title")[0].innerText = "New Title";
__("title")[0].innerText = "New Title";

// document.querySelector("input[name='login']").focus();
__("^input[name='login']").focus();

// document.querySelectorAll("input[name='password']")[0].focus();
__("^^input[name='password']")[0].focus();

// Target element inside specific element instead of document
// document.getElementsByTagName("body")[0].getElementById("targetElm").innerHTML = "Lorem ipsum<br>";
__("#targetElm", __("body")[0]).innerHTML = "Lorem ipsum<br>";
```


# Syntax
`__(selector(String), target(HTMLElement))`


# Parameter Values

| Parameter | Description |
|---|---|
| `selector(String)` | Selector string |
| `target(HTMLElement)` | (Optional) Target HTML element. Default: `document` |
