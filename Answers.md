# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a JavaScript library that allows us to build dynamic user interfaces. React uses a virtual DOM to track specific node changes and interacts with the DOM for us, leading to a smooth experience for all.

2. What does it mean to think in react?

To "think in React" means to break the user interface or page into discrete components.

3. Describe state.

State is an object that holds data. 

4. Describe props.

Props are properties or arguments that are passed into components.

5. What are side effects, and how do you sync effects in a React component to state or prop changes?

Side effects are any changes occurring outside of the executed function's scope. We sync effects in a component to state or prop changes by passing in a dependency array as the second argument inside the Effect hook (the first argument is a callback function).