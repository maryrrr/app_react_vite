
React


Develop an application with React

Example 1.
Free Code Camp / React

<b>-Create a simple JSX element</b>

const JSX=<h1>Hello JSX!</h1>

<b>-Create a complex JSX element</b>

const JSX=<div>
  <h1>Paragraph One</h1>

  <p>Paragraph Two</p>

  <ul>

  <li>Paragraph 1</li>

  <li>Paragraph 2</li>

  <li>Paragraph3</li>

  </ul>
  
</div>


<b>-Add comments in JSX</b>

const JSX = (
  <div>
  {/*this is a comment*/}
    <h1>This is a block of JSX</h1>
    <p>Here's a subtitle</p>
  </div>
);


<b>-Render HTML elements to the DOM</b>

const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
ReactDOM.render(JSX, document.getElementById("challenge-node"))

<b>-Define an HTML Class in JSX</b>

const JSX = (
  <div className="myDiv">
    <h1>Add a class to this div</h1>
  </div>


<b>-Learn about self-closing JSX tags</b>


const JSX = (
  <div>
    <h2>Welcome to React!</h2> <br/ >
    <p>Be sure to close all tags!</p>
    <hr/>
  </div>
<br>


<h2> Installation</h2>



Vite React is a default Vite configuration that is optimized
for React projects. Vite React offers a number of features and
improvements to improve the efficiency and speed of applications
React, such as code precompilation and fast module loading.

<b>npm create vite@latest</b>

<h3>JSX</h3>

JSX is a syntax extension for JavaScript. By using JSX, we can write HTML structures in the
same file that contains JavaScript code. This makes the code easier to understand and
debug as it avoids the use of complex JavaScript DOM structures.



<h3>VSC extension for React</h3>

https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets



