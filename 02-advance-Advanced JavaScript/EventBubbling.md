# - 27 Event Bubbling

Event bubbling means:

When an event happens on a child element, the event can propagate upward through its parent elements.

Consider:

<div id="parent">
    <button id="child">Click Me</button>
</div>

JavaScript:

const parent = document.getElementById("parent");
const child = document.getElementById("child");


parent.addEventListener("click", () => {
    console.log("Parent clicked");
});


child.addEventListener("click", () => {
    console.log("Button clicked");
});

Click the button.

Output:

Button clicked
Parent clicked

Why?

BUTTON
  ↓
DIV
  ↓
BODY
  ↓
HTML
  ↓
DOCUMENT

The event starts at the button and bubbles upward.

🧠 Easy way to remember
Child
  ↑
Parent
  ↑
Grandparent

Bubbling = bottom → top