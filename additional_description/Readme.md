# DOM & BOM

- DOM - | Document Object Model | independent from the any language for work with HTML document, which possess a lot of methods, that help to make manipulations with any HTML elements (create, delete and change), also to listen user activity and react on it, so in other words to connect language with browser page.
DOM - the mirror of HTML document, tree structure, in which every element - JS object with properties and methods, which is part of HTML document. Every element in document is the part of DOM document, so they can changed in JS code. 
- BOM - browser interface (for example listen location and so on)

## DOM navigation (see image/dom-traversal.png)

Instructions: 
1. { elem.parentNode } - parent elem.
2. { elem.childNodes } - array, which possess ALL child elements.
3. { elem.children } - array, which possess ONLY TAGS child elements.
4. { elem.firstChild } - fist child elem, including text elements.
5. { elem.firstElementChild } - first child tag elem.
6. { elem.lastChild } - last child elem, including text elements.
7: { elem.lastElementChild } - last child tag elem.
8. { elem.previousSibling } - left element from elem (pre-sibling), including text elements.
9. { elem.previousElementSibling } - left tag from elem (pre-sibling).
10. { elem.nextSibling } - right element from elem (post-sibling), including text elements
11. { elem.nextElementSibling } - right tag from elem (post-sibling).

## element attributes
- value - text content of element.
- checked - save info of checkbox or radio button.
- name - value, which was mentioned in attribute name.

## Attributes commands
- elem.hasAttribute(name) - check the obsence of attribute, returns true or false.
- elem.getAttribute(name) - show the value of attribute.
- elem.setAttribute(name, value) - set the attribute.
- elem.removeAttribute(name) - delete attribute.
- elem.attributes - return the object of all attributes of the element.


## Adding of element to HTML document in comparison with other elements.
- mainElement.append(el1, el2, ...) - add one or more elements after all children of mainElement.
- mainElement.prepend(el1, el2, ...) - add one or more elements before all children of mainElement.
- mainElement.after(el1, el2, ...) - add one or more elements after mainElement.
- mainElement.before(el1, el2, ...) - add one or more elements before mainElement.
- elem.remove(); - delete element

## features of innerHTML instrument
- helps to write HTML valid code as a string, which can be added to document.
- helps to change already created HTML code as a string.
- helps to rewrite old code (always delete the old code).
- Only use innerHTML to add code if the parent is empty, because firstly it will clear the parent

## Features of insertAdjacentHTML
- "beforebegin" - before elem (only if element is already in DOM)
- "afterbegin" - inside elem, before all children
- "beforeend" - inside elem, after all children
- "afterend" - after elem (only if element is already in DOM)

## Script tag attributes
- asyns - force browser to load script in random line
- defer - force browser to load script after the DOM creation

## Events
- IF you add 'this' in callback function of addEventListener, 'this' will be used in a case of listened HTML element
- preventDefault() -> block the link of <a></a>

## keyboard Events
- keydown - listened the press on buttom
- keyup - listened the unpress on buttom
- .key - shows the value of pressed buttom on KB, consider the language and service buttoms (CTRL, ALT...) 
- .code - shows the value of pressed buttom on KB, does not consider the language and service buttoms (CTRL, ALT...) 

## Keyboard combinations>
For service of combos, like Ctrl + s or any other, was created such methods as ctrlKey, altKey, shiftkey and metaKey, which save Boolean about the response on the questions: was pressed any buttom-modificator (CTRL, ALT...)

{
document.addEventListener("keydown", event => {
  event.preventDefault();

  if ((event.ctrlKey || event.metaKey) && event.code === "KeyS") {
    console.log("«Ctrl + s» or «Command + s» combo");
  }
});
}

Some combination can conflict with default brawser combos, like CTRL + d can open new indow in browser, so be careful during project of web-page. (preventDefault() - can save the situation)
