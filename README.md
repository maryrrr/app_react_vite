
React


Develop an application with React

Example 1.
Free Code Camp / React

-Create a simple JSX element

const JSX=<h1>Hello JSX!</h1>

-Create a complex JSX element

const JSX=<div>
  <h1>Paragraph One</h1>

  <p>Paragraph Two</p>

  <ul>

  <li>Paragraph 1</li>

  <li>Paragraph 2</li>

  <li>Paragraph3</li>

  </ul>
  
</div>


-Add comments in JSX

const JSX = (
  <div>
  {/*this is a comment*/}
    <h1>This is a block of JSX</h1>
    <p>Here's a subtitle</p>
  </div>
);


-Render HTML elements to the DOM

const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
ReactDOM.render(JSX, document.getElementById("challenge-node"))

-Define an HTML Class in JSX

const JSX = (
  <div className="myDiv">
    <h1>Add a class to this div</h1>
  </div>
);


-Learn about self-closing JSX tags


const JSX = (
  <div>
    <h2>Welcome to React!</h2> <br/ >
    <p>Be sure to close all tags!</p>
    <hr/>
  </div>
);
## Installation



Vite React is a default Vite configuration that is optimized
for React projects. Vite React offers a number of features and
improvements to improve the efficiency and speed of applications
React, such as code precompilation and fast module loading.

npm create vite@latest

JSX

JSX is a syntax extension for JavaScript. By using JSX, we can write HTML structures in the
same file that contains JavaScript code. This makes the code easier to understand and
debug as it avoids the use of complex JavaScript DOM structures.



VSC extension for React

https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets



