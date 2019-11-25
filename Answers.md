# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

- ReactJS is a framework built by Facebook that tries to simplify the models of components from the way they would be done in vanilla Javascript and HTML. For instance, instead of searching for objects in the DOM, React keeps track of them with keys, similar to variables in JS. Instead of using DOM / XML manipulation directly in Javascript (which is considered largely painful and slow), it allows you to create components with JSX syntax, and apply properties to them far less painfully.

1. What does it mean to think in react?

- Thinking in React means we get to think about the structure of our application components and how to link them to each other, without worrying about nitty-gritty details of DOM manipulation.

1. Describe state.

- State is the present information that pieces of our page and our components hold. State can be exposed to a user, and the user can interact with our page through its state.

1. Describe props.

- Props (really just short for "Properties") are how our components are able to ergonomically facilitate customization or any parent-child relationships between components. The child takes a "props" object and reads from it, the parent supplies any parameters the child may expect, if needed.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

- Side effects are essentially callbacks that are invoked on state changes (including loading). If you use some state X and want a feature of the page to be updated when X is updated, you give the hook "useEffect" an array of dependencies that will trigger it.
