ReactDOM.render(<h1>Hello, REACT!</h1>, document.querySelector("#root"));

/*
/* Surprise! You probably thought you could just forget
the line of code you just learned! Nope, not on my watch!

Try to write that 1-liner of React code again! This time,
see if you can figure out how to render an <ul> with 2+ <li>s inside
*/

ReactDOM.render(
  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JS</li>
  </ul>,
  document.querySelector("#root")
);
