DOM - | Document Object Model | independent from the any language for work with HTML document, which possess a lot of methods, that help to make manipulations with any HTML elements (create, delete and change), also to listen user activity and react on it, so in other words to connect language with browser page.
DOM - the mirror of HTML document, tree structure, in which every element - JS object with properties and methods, which is part of HTML document. Every element in document is the part of DOM document, so they can changed in JS code. 

BOM - browser interface (for example listen location and so on)


<DOM navigation (see image/dom-traversal.png)

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



<element attributes
-> value - text content of element.
-> checked - save info of checkbox or radio button.
-> name - value, which was mentioned in attribute name.

<Attributes commands
-> elem.hasAttribute(name) - check the obsence of attribute, returns true or false.
-> elem.getAttribute(name) - show the value of attribute.
-> elem.setAttribute(name, value) - set the attribute.
-> elem.removeAttribute(name) - delete attribute.
-> elem.attributes - return the object of all attributes of the element.


<Adding of element to HTML document in comparison with other elements.
-> mainElement.append(el1, el2, ...) - add one or more elements after all children of mainElement.
-> mainElement.prepend(el1, el2, ...) - add one or more elements before all children of mainElement.
-> mainElement.after(el1, el2, ...) - add one or more elements after mainElement.
-> mainElement.before(el1, el2, ...) - add one or more elements before mainElement.