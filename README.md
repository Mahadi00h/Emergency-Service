# Emergency Services website

Question-1: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer: document.getElementById gets a single element by matching id.
document.getElementsByClassName gets elements that contains the similar classes.
document.querySelector gets only the first element that matches with css selector.
document.querySelectorAll gets all matching element.

Question-2: How do you create and insert a new element into the DOM?

Answer: Fisrt step-
const newElement = document.createElement('p');
this create a 'paragraph' tag and assign it to 'newElement'
newElement.textContent = 'Hello, world!'; {this adds text inside the Element}
newElement.id = 'myPara'; {This step add an id to the element (not necessery if id not nedded)}
newElement.className = 'myClass'; {this step add class but can avoid if class not nedded}
const parent = document.getElementById('parentContainer');{select the parent div}
parent.appendChild(newElement);{added to parent as a child element}

Question-3:What is Event Bubbling and how does it work?

Answer: Event bubbling means an event mechanism that starts from the top element than reaches the target and again comes to the top via parent element .

Question-4:What is Event Delegation in JavaScript? Why is it useful?

Answer: Event delegation means instead of using multiple event listner using a single event listener in parent and handling multiple childs event using event bubbling.

question-5: What is the difference between preventDefault() and stopPropagation() methods?

Answer: stopPropagation() Stops the event from bubbling up the DOM tree.
preventDefult() prevents event from functioning
