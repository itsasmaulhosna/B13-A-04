1. getElementById,it selects an element by using it's id.
   Syntax: document.getElementById('id')

   getElementByClassName,it selects an element by it's class name.
   Syntax: document.getElementsByClassName('className')

   querySelector,it uses CSS and return only first matching element,
   Syntax: document.querySelector('selector')

   querySelectorAll,it also uses CSS but it returns all matching element.
   Syntax: document.querySelectorAll('selector')

2. Use docoment.creatElement() to creat. new element
   const div=document.creatElement('div');
   add text content/class
   div.innerText='This is a div";
   document.body.append(div);

3. Event bubbling is a proccess where we click any event it starts from the element then bubbles up to parent elements. If we click any child element it happens on that element then moves to it's parent elements.

<div id="parent">
  <button id="child">Click me</button>
</div>

document.getElementById('parent').addEventListener('click', function() {
console.log('Parent clicked');
});

document.getElementById('child').addEventListener('click', function() {
console.log('Child clicked');
});

Event starts from the target child, then bubbles up to parent

4. Event Delegation is a proccess where we don't add any event listener every child ,we only add event listener to theire parents.

mainContainer.addEventListener('click', function (event) {
if (event.target.classList.contains('interview-btn')) {
console.log("Interview Clicked")
}
});
here we don't event listener add every button,only add to their parent mainContainer.

5.  preventDefault() is uesd to Prevents the default browser behavior associated with an event. It does not stop default browser behavior. preventDefault() stops the default action associated with the event. It is commonly use forms, links

On the other hand,stopPropagation() is used to Stops the browser’s default behavior for an event. It is commonly use Nested click handlers.stopPropagation() stops the event from bubbling up to parent elements.
